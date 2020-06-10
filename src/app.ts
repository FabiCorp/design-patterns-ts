import express from 'express';
import { ConcreteFactoryA, ConcreteFactoryB } from "./factoryMethod/Factory";
import { Product } from "./factoryMethod/Product";

const app = express();
const port = 3000;

var factoryA = new ConcreteFactoryA();
var productOne = factoryA.createProduct("Product One");
console.log(productOne);
productOne.triggerProductAction()

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});