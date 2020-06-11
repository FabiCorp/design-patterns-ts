export interface Chair {
    productName: string;
    triggerProductAction(): void;
}

export interface Table {
    productName: string;
    triggerProductAction(): void;
}

export class ModernChair implements Chair {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on modern chair with name:" + this.productName)
    }
}

export class ModernTable implements Table {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on modern table with name:" + this.productName)
    }
}

export class OldChair implements Chair {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on modern chair with name:" + this.productName)
    }
}

export class OldTable implements Table {
    productName: string;

    constructor(productName: string) {
        this.productName = productName;
    }

    triggerProductAction() {
        console.log("Triggered action on modern table with name:" + this.productName)
    }
}

