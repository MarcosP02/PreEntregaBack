
import { Router } from "express";
import { AutoManager} from "../controllers/AutoManager.js";



const routerAuto = Router();
const autoManager = new AutoManager('./src/models/cars.json');

routerAuto.get('/',async(req,res)=>{

    const {limit} = req.query

    const car = await AutoManager.getAutos()
    const con = car.slice(0,limit)
    res.status(200).send(con)


})
routerAuto.get('/:id',async(req,res)=>{
    const {id} = req.params
const car = await AutoManager.getCarsById(parseInt(id))
if(car)
res.status(200).send(car)
else{
    res.status(404).send('El Auto no existe')
}

})





export default routerAuto