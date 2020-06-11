
export interface House {
    setWalls(): void;
    setRoof(): void;
    setDoors(): void;
    setPool(): void;
    setWindows(): void;
    setGarage(): void;
}


export class WoodHouse implements House {
    walls = false;
    roof = false;
    doors = false;
    pool = false;
    windows = false;
    garage = false;

    setWalls() { this.walls = true; }
    setRoof() { this.roof = true; }    
    setDoors() { this.doors = true; }    
    setPool() { this.pool = true; }
    setWindows() { this.windows = true; }
    setGarage() { this.garage = true; }
}
