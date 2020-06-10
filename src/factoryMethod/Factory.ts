import { Product, ConcreteProductA, ConcreteProductB } from "./Product";

abstract class Factory {
    abstract createProduct(productName: string): Product;
    
    getWorkDone(): void {
        console.log("WORK HARD TO EARN RESPECT!");
    }
}

export class ConcreteFactoryA extends Factory {
    createProduct(productName: string): ConcreteProductA {
        return new ConcreteProductA(productName);
    }
}

export class ConcreteFactoryB extends Factory {
    createProduct(productName: string): ConcreteProductB {
        return new ConcreteProductB(productName);
    }
}