interface Mediator {
    notify(sender: Component, event: string): void;
}

class AuthenticationDialog implements Mediator {
    private title: string = "Title";
    private loginOrRegister: Checkbox = new Checkbox(this);
    private loginUsername: Textbox = new Textbox(this);
    private loginPassword: Textbox = new Textbox(this);
    private registerMail: Textbox = new Textbox(this);
    private registerPassword: Textbox = new Textbox(this);
    private submitButton: Button = new Button(this);
    private cancelButton: Button = new Button(this);

    public notify(sender: Component, event: string): void {
      this.checkForLoginOrRegister(sender, event);
      this.checkForSubmit(sender, event);
    }

    private checkForLoginOrRegister(sender: Component, event: string) {
        if (sender === this.loginOrRegister && event === "click") {
            // do stuff here 
        }
    }

    private checkForSubmit(sender: Component, event: string) {
        if (sender === this.submitButton && event === "click") {
            // do stuff here 
        }
    }

}

class Component {
    constructor(protected dialog: Mediator) {}

    public click() {
        this.dialog.notify(this, "click");
    }

    public enter() {
        this.dialog.notify(this, "enter");
    }
}

class Checkbox extends Component {
    constructor(dialog: Mediator) { super(dialog); }
}

class Textbox extends Component {
    constructor(dialog: Mediator) { super(dialog); }
}

class Button extends Component {
    constructor(dialog: Mediator) { super(dialog); }
}