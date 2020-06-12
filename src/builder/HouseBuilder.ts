import { House, WoodHouse } from "./House";

interface HouseBuilder {
    reset(): void;
    buildWalls(): void;
    buildRoof(): void;
    buildDoors(): void;
    buildPool(): void;
    buildWindows(): void;
    buildGarage(): void;
    getResult(): House
}

export class WoodHouseBuilder implements HouseBuilder {

    result = new WoodHouse();

    reset() { this.result = new WoodHouse(); }
    buildWalls() { this.result.setWalls(); }
    buildRoof() { this.result.setRoof(); }
    buildDoors() { this.result.setDoors(); }
    buildPool() { this.result.setPool(); }
    buildWindows() { this.result.setWindows(); }
    buildGarage() { this.result.setGarage(); }
    getResult() { return this.result; }
}

export class Director {

    builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.builder = builder
    }

    changeBuilder(builder: HouseBuilder) {
        this.builder = builder;
    }

    constructHouse(type: HouseType): House {
        this.builder.buildWalls()
        this.builder.buildDoors();
        this.builder.buildRoof();
        this.builder.buildWindows();

        if (type == HouseType.Simple) {
            return this.builder.getResult();
        } else {
            this.builder.buildPool();
            this.builder.buildGarage();
            return this.builder.getResult();
        }
    }
}

enum HouseType {
    Simple,
    AllInclusive,
}

