class Car {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    GetCar(){
        console.log(`${this.height} ${this.width}`);
    }
}

modules.export = {Car}
