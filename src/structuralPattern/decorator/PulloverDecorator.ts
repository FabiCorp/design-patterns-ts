
interface Cloth {
    calculateHeat(): number;

}

class TeeShirt implements Cloth {
    public calculateHeat(): number {
        return 5;
    }
}

class ClothDecorator implements Cloth {

    constructor(private cloth: Cloth) { }

    public calculateHeat(): number {
        return this.cloth.calculateHeat();
    }
}

class Pullover extends ClothDecorator {

    private heatValue: number = 7;

    public calculateHeat(): number {
        const underlayingClothHeat = super.calculateHeat()
        return underlayingClothHeat + this.heatValue; 
    }
}

class Jacket extends ClothDecorator {

    private heatValue: number = 13;

    public calculateHeat(): number {
        const underlayingClothHeat = super.calculateHeat()
        return underlayingClothHeat + this.heatValue; 
    }
}