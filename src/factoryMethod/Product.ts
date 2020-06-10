export interface Product {
    productName: string;
    triggerProductAction(): void;
}

export class ConcreteProductA implements Product {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on product A with name:" + this.productName)
    }
}

export class ConcreteProductB implements Product {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on product B with name:" + this.productName)
    }
}