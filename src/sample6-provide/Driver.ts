import { Service } from "typedi";
import { Bus } from "./Bus";
import { Car } from "./Car";

@Service()
export class Driver {
  constructor(public bus: Bus, public car: Car) {}

  // driveBus() {
  //   this.bus.drive();
  // }

  // driveCar() {
  //   this.car.drive();
  // }
}
