import { CommandHistory, Command } from './EditorCommand'

export class Application {
    private commandHistory: CommandHistory = CommandHistory.getInstance();
    private editorList: Editor[] = [];

    constructor(private activeEditor: Editor) { }

    public executeCommand(command: Command): void {
        command.execute();
        this.commandHistory.push(command);
    }

    public undo(): void {
        const command = this.commandHistory.pop();
        if (command !== undefined) {
            command.undo();
        }
    }
}

export class Editor {

    public text: string = ''; 

    public getSelection(): string { return this.text; }

    public deleteSelection(): void { this.text = ''; }

    public replaceSelection(text: string) { this.text = text; }
    
}

class Buttons {

}

class Shortcuts {

}

