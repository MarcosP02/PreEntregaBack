
import { Router } from "express";
import { AutoManager} from "../controllers/AutoManager.js";



const routerAuto = Router();
const autoManager = new AutoManager('../src/models/cars.json');

routerAuto.get('/',async(req,res)=>{

    const {limit} = req.query

    const car = await autoManager.getAuto()
    const con = car.slice(0,limit)
    res.status(200).send(con)


})
routerAuto.get('/:id',async(req,res)=>{
    const {id} = req.params
const car = await autoManager.getAutoById(parseInt(id))
if(car)
res.status(200).send(car)
else{
    res.status(404).send('El Auto no existe')
}

})
routerAuto.post('/', async(req,res)=>{
    const confirmacion = await conseAuto.addCar(req.body)
 
    if(confirmacion)
     res.status(200).send('Auto creado')
     else
     res.status(400).send('Ya existe')
     
     
     })
 

routerAuto.post('/',async(req,res)=>{
   await autoManager.carPath
const car = await autoManager.autoCredado(parseInt(id))
if(car)
res.status(200).send(car)
else{
    res.status(404).send('El Auto no existe')
}

})


export default routerAuto