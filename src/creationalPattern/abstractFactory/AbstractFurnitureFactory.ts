import { Chair, Table, ModernChair, ModernTable, OldChair, OldTable } from "./Furniture";

interface AbstractFunitureFactory {
    createChair(chairName: string): Chair;
    createTable(tableName: string): Table;
}

export class ModernFurnitureFactory implements AbstractFunitureFactory {
    createChair(chairName: string): Chair {
        return new ModernChair(chairName);
    }

    createTable(tableName: string): Table {
        return new ModernTable(tableName);
    }
}

export class OldFurnitureFactory implements AbstractFunitureFactory {
    createChair(chairName: string): Chair {
        return new OldChair(chairName);
    }

    createTable(tableName: string): Table {
        return new OldTable(tableName);
    }
}