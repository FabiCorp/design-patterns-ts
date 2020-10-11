import { Application, Editor } from './Application'

abstract class Command {
    
    private backup: string = this.editor.text;

    constructor(protected application: Application, protected editor: Editor) { }

    public undo(): void { this.editor.text = this.backup; }

    public safeStartState() { this.backup = this.editor.text; }

    public abstract execute(): void;
}

export class CopyCommand extends Command {

    public execute() { console.log('Copy stuff!'); }

}

export class CutCommand extends Command {

    public execute() { console.log('Cut stuff!'); }

}

export class PasteCommand extends Command {

    public execute() { console.log('Paste stuff!'); }

}

export class UndoCommand extends Command {

    public execute() { console.log('Undo stuff!'); }

}

class CommandHistory {

    private static commandHistory: CommandHistory;

    private history: Command[] = [];

    private constructor() { }

    public static getInstance(): CommandHistory {
        
        if (this.commandHistory === undefined) {
            this.commandHistory = new CommandHistory()
        }
        
        return this.commandHistory;
    }

    public push(command: Command) { this.history.push(command) }

    public pop(): Command | undefined { return this.history.pop() }

}
