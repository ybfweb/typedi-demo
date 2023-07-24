import "reflect-metadata";
import { Container } from "typedi";
import { CarFactory } from "./CarFactory";
import { Counter } from "./Counter";

export default function doApp1() {
  let carFactory = Container.get(CarFactory);
  carFactory.create();

  let counter = Container.get(Counter);
  counter.increase();
  counter.increase();
  counter.increase();
  console.log(counter.getCount());
}
