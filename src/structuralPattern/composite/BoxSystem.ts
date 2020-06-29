
interface BoxComponent {
    calculatePrice(): number;
    getId(): string
}

class Product implements BoxComponent {

    private readonly id: string;
    private price: number;

    constructor(id: string, price: number) {
        this.id = id;
        this.price = price;
    }

    public calculatePrice(): number {
        return this.price;
    }

    public getId(): string {
        return this.id;
    }
}

class Box implements BoxComponent {

    private readonly id: string;
    private boxChilden: BoxComponent[] = [];

    constructor(id: string) {
        this.id = id;
    }

    public calculatePrice(): number {
        var price = 0;
        this.boxChilden.forEach(child => price = price + child.calculatePrice())
        return price;
    }

    public add(boxChild: BoxComponent) {
        this.boxChilden.push(boxChild);
    }

    public remove(boxChild: BoxComponent) {
        this.boxChilden = this.boxChilden.filter(child => boxChild.getId() !== child.getId());
    }

    public getId(): string {
        return this.id;
    }

}