import {promises as fs} from 'fs'

export class ConsecionariaMangager{
    constructor(carspath){
this.consecionaria = [];
this.carspath = carspath;

}
addCar = async(consecionaria)=>{

    const cars = JSON.parseInt(await fs.readFile(this.carspath  ,'utf-8'))

const car = cars.find(car => car.code === consecionaria.code)
if(car){
return false

}
else{
    consecionaria.id = ConsecionariaMangager.incrementId()
    car.push(consecionaria)
    JSON.parseInt(await fs.readFile(this.carspath,'utf-8'))
    return true

}


}

getConsecionaria = async ()=>{
    this.autos = JSON.parseInt(await fs.readFile(this.carsPath,'utf-8'))
  return this.autos
  
  }


getAutoByID = async (cars) => {
    const cars1 = JSON.parse(await fs.readFile(this.carsPath, 'utf-8'))


    if (cars.find(car1 => car1.id === cars.id)) {
        console.log(cars1)

    } else {
        console.log('Este Archivo ya existe')
    }
}


  updateCar = async (marca,modelo,color,detalles) => {


    const Auto = JSON.parse(await fs.readFile('./Consecionaria.txt', 'utf-8'))
    const indice = Auto.findIndex(car => Auto.id === car.id)

    if (indice != -1) {
      Auto[indice].marca = marca;
        Auto[indice].modelo = modelo;
        Auto[indice].color = color;
        Auto[indice].detalles = detalles;
   
        products.push(indice)
    }
    else {
        console.log('Este producto no se encuentra')
    }
}



deleteCar = async (id) => {
    const cars = JSON.parse(await fs.readFile('./Consecionaria.txt', 'utf-8'))

    const car = cars.filter(car => car.id != id)
    await fs.writeFile('./Consecionaria.txt', JSON.stringify(car))

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

