
import { promises as fs } from 'fs'

export class AutoManager {
  constructor(carpath,auto)
   {
    this.cars =[]
   this.auto= auto
    this.carpath = carpath
  }

  static incrementId() {
    if (this.incrementId) {
      this.incrementId++
    } else {
      this.incrementId = 1;
    }
    return this.incrementId
  }

  /*async prototipoCarrito = () => {
      agregarProducto: function(producto){
        if(!this.productos){
         this.productos = [producto]
        } else {
         this.productos.push(producto);
        }
      },
  
      }
    }*/

async autoCredado(){
  this.cars = JSON.parse(await fs.readFile(this.carpath,'utf-8'))
  const nuevoAuto = {id: AutoManager.incrementId(this.cars),Consecionaria:[]}
  this.cars.push(nuevoAuto)
  await fs.writeFile(this.carspath,JSON.stringify(this.cars))
  console.log(this.cars)
}


async getAuto() {
let existe =""

if(existe)
  this.cars = JSON.parse(await fs.readFile(this.carspath, 'utf-8'));
 
  else{
    console.log('no')
  }
  return existe
}

async addCar (auto){
  const cars = JSON.parse(await fs.readFile(this.carpath,'utf-8'))

const car = cars.find(car => car.code === code)
if(car){
return false


}
else{
    auto.id = AutoManager.incrementId()
    cars.push(consecionaria)
    JSON.parse(await fs.readFile(this.carpath,'utf-8'))
   
}
await fs.writeFile(this.carpath, JSON.stringify(cars));
    
return true
}


  async getAuto() {

    this.cars = JSON.parse(await fs.readFile(this.carspath, 'utf-8'));
    return this.cars
  }

  async getAutoByID (id) {
    const cars1 = JSON.parse(await fs.readFile(this.carpath, 'utf-8'))
 const porid = cars1.find(porid => porid.id === id)

    if (porid) {
        return porid

    } else {
        console.log('Auto no existe')
    }
}


}


