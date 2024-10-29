// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(); // Call the constructor of the parent class
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements; if not, create 2 new default Wheel objects
    this.wheels = wheels.length === 2 ? wheels : Array(2).fill(new Wheel());
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class
    console.log(`Details of the Motorbike: 
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight}
      Top Speed: ${this.topSpeed}
      Color: ${this.color}
      Wheels: ${this.wheels.length}`);


    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inches, ${this.wheels[0].getTireBrand}`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inches, ${this.wheels[1].getTireBrand}`);

  }

}

// Export the Motorbike class as the default export
export default Motorbike;

