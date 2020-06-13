
interface Furniture {
    getId(): String;
    clone(): Furniture;
}

class Chair implements Furniture {

    private id: String;

    constructor(id: String) {
        this.id = id;
    }

    clone(): Furniture {
        // Object.assign(target, ...sources) -> Copies all accessable properties 
        // from one or multiple source object to a new object
        // returns the new object
        return Object.assign({}, this);
    }

    getId(): String {
        return this.id;
    }
}

class ModernChair extends Chair {

    private designer: String;

    constructor(id: String, designer: String) {
        super(id);
        this.designer = designer;
    }

    clone(): Furniture {
        return Object.assign({}, this);
    }
}

class FurnitureRegistry {
    private furniturePrototypes: Furniture[] = [];

    addFurniture(furniture: Furniture) {
        this.furniturePrototypes.push(furniture);
    }

    getById(id: String) {
        this.furniturePrototypes.forEach(furniture => {
            if (furniture.getId() === id) {
                return furniture;
            }
        })
    }
}