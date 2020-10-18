
interface IteratorInterface {
    getNext(): Profile;
    hasMore(): boolean;
}

class FacebookIterator implements IteratorInterface {

    private currentIndex: number = 0;
    constructor(private profileList: Profile[]) { }
    public getNext = (): Profile => this.profileList[this.currentIndex++];
    public hasMore = (): boolean => this.profileList[this.currentIndex + 1] ? true : false;

}

class Profile {
    constructor(public readonly name: string, public readonly id: string) { }
    public sendMessage = (message: string) => console.log(message);
}

interface SocialNetwork {
    createIterator(): IteratorInterface;
}

class Facebook implements SocialNetwork {

    constructor(private profileList: Profile[]) { }
    createIterator = (): IteratorInterface => new FacebookIterator(this.profileList);
    
}

class Application {
    private readonly spammer: SocialSpammer = SocialSpammer.getInstance();
    private currentNetwork: SocialNetwork = new Facebook([new Profile("Fabi", "1")])
    public setNetwork = (network: SocialNetwork) => this.currentNetwork = network;
    public spamCurrentNetwork = () => this.spammer.spamNetwork(this.currentNetwork.createIterator(), "SPAM HAHA"); 
}

class SocialSpammer {

    private static socialSpammer: SocialSpammer;

    private constructor() { }

    public static getInstance() {
        if (this.socialSpammer === undefined) {
            this.socialSpammer = new SocialSpammer()
        }
        return this.socialSpammer;
    }

    public spamNetwork(iterator: IteratorInterface, message: string): void {
        while(iterator.hasMore()) iterator.getNext().sendMessage(message);
    }

}