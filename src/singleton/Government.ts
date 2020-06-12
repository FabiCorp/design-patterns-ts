
class GermanGovernment {
    private static instance: GermanGovernment;

    private constructor() {}

    public static getInstance(): GermanGovernment {
        if (!GermanGovernment.instance) {
            GermanGovernment.instance = new GermanGovernment;
        }
        return GermanGovernment.instance;
    }

    public workForTheMoney() {
        console.log("WORK FOR THE PAY CHECK!");
    }
}