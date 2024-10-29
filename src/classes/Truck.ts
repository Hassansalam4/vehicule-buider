// Import the necessary classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {

    super(); 
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements; if not, create 4 new default Wheel objects
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel());
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}` : 'unknown vehicle';

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleDetails} is being towed by the truck.`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed by this truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails(); 
    console.log(`Details of the Truck: 
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight}
      Top Speed: ${this.topSpeed}
      Color: ${this.color}
      Towing Capacity: ${this.towingCapacity}
      `);
  

  // log the detail of each wheel
  console.log(`Wheel 1: ${this.wheels[0].getDiameter} inches, ${this.wheels[0].getTireBrand}`);
  console.log(`Wheel 2: ${this.wheels[1].getDiameter} inches, ${this.wheels[1].getTireBrand}`);
  console.log(`Wheel 3: ${this.wheels[0].getDiameter} inches, ${this.wheels[0].getTireBrand}`);
  console.log(`Wheel 4: ${this.wheels[1].getDiameter} inches, ${this.wheels[1].getTireBrand}`);



    }

}

// Export the Truck class as the default export
export default Truck;

