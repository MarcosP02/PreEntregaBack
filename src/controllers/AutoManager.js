
import { promises as fs } from 'fs'

export class AutoManager {
  constructor(carsPath) {
    this.car = [];
    this.carsPath = carsPath
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
  creaAuto = async () => {
    this.cars = JSON.parse(await fs.readFile(this.carsPath, 'utf-8'));
    const newCart = { id: AutoManager.incrementarID(), consecionaria: [] };
    this.car.push(newCart)
    await fs.writeFile(this.carsPath, JSON.stringify(this.car));
  }

  getAutos = async () => {

    this.cars = JSON.parse(await fs.readFile(this.carsPath, 'utf-8'));
    return this.autos
  }



}






