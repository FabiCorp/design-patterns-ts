
interface Color {
    getColor(): String;
}

class Red implements Color {
    public getColor(): String {
        return "Red";
    }
}

class Blue implements Color {
    public getColor(): String {
        return "Blue";
    }
}

interface Material {
    getMaterial(): String;
}

class Wood implements Material {
    public getMaterial(): String {
        return "Wood";
    }
}

class Metal implements Material {
    public getMaterial(): String {
        return "Metal";
    }
}

interface Shape {
    printProperties(): any; 
}

class Circle implements Shape {
    private color: Color;
    private material: Material;
    private shapeName: String = "Circle";

    constructor(material: Material, color: Color) {
        this.color = color;
        this.material = material;
    }

    public printProperties() {
        console.log(this.shapeName + "built of " + this.material.getMaterial() + " coloured " + this.color.getColor());
    }
}
