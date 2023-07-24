import "reflect-metadata";
import { Container } from "typedi";
import { CoffeeMaker } from "./CoffeeMaker";

export default function app3() {
  let coffeeMaker = Container.get(CoffeeMaker);
  console.log(coffeeMaker);
  coffeeMaker.make();
}
