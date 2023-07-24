import "reflect-metadata";
import { Container } from "typedi";
import { Driver } from "./Driver";
// import { FakeBus } from "./FakeBus";
// import { FakeCar } from "./FakeCar";
// import { Bus } from "./Bus";
// import { Car } from "./Car";

// provide fake implementations
// Container.set([
//   { id: Bus, value: new FakeBus() },
//   { id: Car, value: new FakeCar() }
// ]);

// drive!
export default function app6() {
  let driver = Container.get(Driver);
  driver.bus.drive();
  // driver.driveBus();
  // driver.driveCar();
}
