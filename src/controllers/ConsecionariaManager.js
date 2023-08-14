import {promises as fs} from 'fs'

export class ConsecionariaMangager{
constructor(carspath,auto){
this.consecionaria = [];
this.carspath = carspath;
this.auto = auto

}


async addCar (consecionaria){
  const cars = JSON.parse(await fs.readFile(this.carspath,'utf-8'))

const car = cars.find(car => car.code === consecionaria.code)
if(car){
return false


}
else{
    consecionaria.id = ConsecionariaMangager.incrementId()
    cars.push(consecionaria)
    JSON.parse(await fs.readFile(this.carspath,'utf-8'))

    await fs.writeFile(this.carspath, JSON.stringify(cars));
    
    return true
   
}

}


 

async getConsecionaria(){
    this.autos = JSON.parseInt(await fs.readFile(this.carsPath,'utf-8'))
  return this.autos
  
  }


  async getAutoByID (id) {
    const cars1 = JSON.parse(await fs.readFile(this.carsPath, 'utf-8'))
 const porid = cars1.find(porid => porid.id === id)

    if (porid) {
        return porid

    } else {
        console.log('Este Archivo ya existe')
    }
}


async updateCar  (marca,modelo,color,detalles)  {


    const Auto = JSON.parse(await fs.readFile(this.carspath, 'utf-8'))
    const indice = Auto.findIndex(car => Auto.id === car.id)

    if (indice != -1) {
      Auto[indice].marca = marca;
        Auto[indice].modelo = modelo;
        Auto[indice].color = color;
        Auto[indice].detalles = detalles;
   await fs.writeFile(this.carspath,JSON.stringify(Auto))
        return Auto
    }
    else {
        console.log('Este producto no se encuentra')
    }
}



async  deleteCar  (id) {
    let cars = JSON.parse(await fs.readFile(this.carspath, 'utf-8'))

    const car = cars.filter(car => car.id != id)
    if(car){
        const carid = this.consecionaria.filter(carid => carid.id != id)
        await fs.writeFile(this.carsPath, JSON.stringify(carid))
    }
    console.log('El auto no existe')

}

static incrementId(){
    if(this.incrementId){
        this.incrementId ++
    }else{
        this.incrementId = 1;
    }
    return this.incrementId
    }
}

