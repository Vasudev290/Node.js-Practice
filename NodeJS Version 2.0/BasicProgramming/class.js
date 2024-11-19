class Car {
    constructor(make, color){
        this.make = make;
        this.color = color;
    }

    displayInfo() {
        console.log(`${this.make},${this.color}`);
        
    }
}

const myCar = new Car('Audi','Red')
myCar.displayInfo()