import { Link } from "react-router-dom";


function Navbar(){
    // somne ..
    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={"/"}>
                <h1 className="text-2xl font-bold">Vehiculos Manager</h1>
            </Link>
            <ul className="flex gap-x-2">
                <>
                    <li>
                        <Link to={"/"} 
                        className="bg-indigo-500 px-4 py-3 rounded-sm">Home</Link>
                    </li>
                    <li>
                        <Link to={"/vehiculos"} 
                        className="bg-indigo-500 px-4 py-3 rounded-sm">Lista de Vehiculos</Link>
                    </li>
                    <li>
                        <Link to={"/formVehiculos"} 
                        className="bg-indigo-500 px-4 py-3 rounded-sm">Formulario de Vehiculos</Link>
                    </li>
                </>
            </ul>
        </nav>
    )
}

export default Navbar ;