
interface BoxComponent {
    calculatePrice(): number;
    getId(): string;
}

class Product implements BoxComponent {

    constructor(private readonly id: string, private price: number) { }

    public calculatePrice(): number {
        return this.price;
    }

    public getId(): string {
        return this.id;
    }
}

class Box implements BoxComponent {

    private boxChilden: BoxComponent[] = [];

    constructor(private readonly id: string) { }

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