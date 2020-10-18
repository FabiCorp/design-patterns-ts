import { Application, Editor } from './Application'

export abstract class Command {
    
    private backup: string = this.editor.text;

    constructor(protected application: Application, protected editor: Editor) { }

    public undo(): void { this.editor.text = this.backup; }

    public safeStartState() { this.backup = this.editor.text; }

    public abstract execute(): void;
}

export class CopyCommand extends Command {

    constructor(protected application: Application, protected editor: Editor) {
        super(application, editor);
    }

    public execute(): void { 
        this.editor.getSelection();
    }

}

export class CutCommand extends Command {

    constructor(protected application: Application, protected editor: Editor) {
        super(application, editor);
    }

    public execute(): void { 
        this.editor.getSelection();
        this.editor.deleteSelection();
    }

}

export class PasteCommand extends Command {

    constructor(protected application: Application, protected editor: Editor) {
        super(application, editor);
    }

    public execute(): void { 
        this.editor.replaceSelection("PASTE");
    }

}

export class UndoCommand extends Command {

    constructor(protected application: Application, protected editor: Editor) {
        super(application, editor);
    }

    public execute(): void { 
        this.application.undo();
    }

}

export class CommandHistory {

    private static commandHistory: CommandHistory;

    private history: Command[] = [];

    private constructor() { }

    public static getInstance(): CommandHistory {
        
        if (this.commandHistory === undefined) {
            this.commandHistory = new CommandHistory();
        }
        
        return this.commandHistory;
    }

    public push(command: Command) { this.history.push(command); }

    public pop(): Command | undefined { return this.history.pop(); }

}
