import { Router } from "express";
import { ConsecionariaMangager } from "../controllers/ConsecionariaManager.js";



const routerConsecionaria = Router();
const conseAuto = new ConsecionariaMangager('../src/models/consecionaria.json')

routerConsecionaria.get('/', async(req,res)=>{
    const {limit} = req.query
    const con = await conseAuto.getConsecionaria()    
    const consecionaria = con.slice(0,limit)
    res.status(200).send(consecionaria)
})

routerConsecionaria.get('/:id', async(req,res)=>{
const {id} = req.params
const con = await conseAuto.getAutoById(parseInt(id))
if(con)
res.status(200).send(con)
else
res.status(404).send('No existe')


})

routerConsecionaria.post('/', async(req,res)=>{
   const confirmacion = await conseAuto.addCar(req.body)

   if(confirmacion)
    res.status(200).send('Auto creado')
    else
    res.status(400).send('Ya existe')
    
    
    })

    routerConsecionaria.put('/', async(req,res)=>{

        
        const confirmacion = await conseAuto.updateCar(req.body,req.params)
     
        if(confirmacion)
         res.status(200).send('Auto Actualizado')
         else
         res.status(404).send('No Existe')
         
         
         })
     

         routerConsecionaria.delete('/:id', async(req,res)=>{

        
            const confirmacion = await conseAuto.deleteCar(req.body,req.params)
         
            if(confirmacion)
             res.status(200).send('Auto Eliminado')
             else
             res.status(404).send('No Encontrado')
             
             
             })

export default routerConsecionaria