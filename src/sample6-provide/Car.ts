import { Service } from "typedi";

@Service()
export class Car {
  drive(): void {
    console.log("Im driving the car");
  }
}
