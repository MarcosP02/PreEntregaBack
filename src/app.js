import express  from "express";
import routerConsecionaria from "./routes/consecionariaManager.routes.js";
import routerAuto from "./routes/autos.routes.js";
import { __dirname } from "./path.js";


const app = express()

const PORT = 4000;

app.use(express.json())
app.use (express.urlencoded({extended:true}))



app.use('/static',express.static(`${__dirname}/public`))
app.use('/api/ConsecionariaManager', routerConsecionaria)
app.use('/api/AutoManager',routerAuto)


app.listen(PORT,()=>{
  console.log(`Servidor desde puerto: ${PORT}`);
	console.log(`http://localhost:${PORT}`);
})
