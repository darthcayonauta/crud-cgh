import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();
const port  = 4200
app.listen(port)
console.log(`Puerto y servidor Bckend: ${port}`)