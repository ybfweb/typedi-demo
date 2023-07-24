import "reflect-metadata";
import { Container } from "typedi";
import { CoffeeMaker } from "./CoffeeMaker";

export default function doApp2() {
  let coffeeMaker = Container.get(CoffeeMaker);
  coffeeMaker.make();
}
