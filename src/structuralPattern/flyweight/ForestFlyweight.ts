
class Forest {

    private treeList: Tree[] = [];
    
    public plantTree(x: number, y: number, name: string, color: string, texture: any) {
        const treeType = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, treeType);
        this.treeList.push(tree);
    }

    public draw(canvas: any) {
        this.treeList.forEach(tree => tree.draw(canvas));
    }
}

class TreeFactory {

    private static treeTypeList: TreeType[] = [];

    public static getTreeType(name: string, color: string, texture: any): TreeType {
        let treeType = this.findTreeType(name, color, texture);
        if (treeType === undefined) {
            treeType = new TreeType(name, color, texture);
            this.treeTypeList.push(treeType);
        }
        return treeType;
    }

    private static findTreeType(name: string, color: string, texture: any): TreeType | undefined {
        return this.treeTypeList.find(treeType => this.matchTree(treeType, name, color, texture));
    }

    private static matchTree(treeType: TreeType, name: string, color: string, texture: any): boolean {
        if (treeType.color === color &&
            treeType.name === name && 
            treeType.texture === texture) {
                return true;
        }
        return false;
    }

}

class Tree {
    constructor(private x: number, private y: number, private type: TreeType) { }
    public draw(canvas: any) { }
}

class TreeType {
    constructor(public readonly name: string, public readonly color: string, public readonly texture: any) { }
}
