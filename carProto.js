/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car{
    constructor(model){
        this.model = model
        this.currentSpeed = 0
    }
    
    accelerate() {
        return this.currentSpeed++
    }
    brake(){
        return this.currentSpeed--
    }
    toString(){
        return `The speed of car is ${this.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const carobj = new Car("Taurus")
carobj.accelerate()
carobj.accelerate()
carobj.brake()
carobj.toString()

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model){
        super(model)
        this.motor = "electric"
    }
    accelerate(){
        super.accelerate()
        super.accelerate()
    }
    toString(){
        return `Electric car with model ${this.model} accelerates with ${this.currentSpeed} speed as its motor is ${this.motor}.`
    }

  }

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const ElectricCarobj = new ElectricCar("Tesla");
ElectricCarobj.accelerate()
ElectricCarobj.accelerate()
ElectricCarobj.brake()
ElectricCarobj.toString()