import { Route,Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Vehiculos from "./pages/Vehiculos"
import FormVehiculos from "./pages/FormVehiculos"
import Navbar from "./components/Navbar"
import { VehiculoProvider } from "./context/VehiculosContext"



function App() {
 // const [count, setCount] = useState(0)

  return (
    <VehiculoProvider>
        <BrowserRouter>
              <main className="container mx-auto p-11">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/vehiculos" element={<Vehiculos />} />
                  <Route path="/formVehiculos" element={<FormVehiculos/>} />
                  <Route path="/vehiculos/:id" element={<FormVehiculos/>}/>
                </Routes>
              </main>
            </BrowserRouter>
      </VehiculoProvider>
  )
}

export default App
