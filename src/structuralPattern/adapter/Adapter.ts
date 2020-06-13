
interface ClientAnalyseService {
    analyseData(XMLinput: String): String;
}

class JSONAnalysationService {

    analyseJsonData(JSONinput: String): String {
        return "RESULTS FROM ANALYSATION";
    }
}

export class JSONAdapter implements ClientAnalyseService {

    private jsonAnalysationService: JSONAnalysationService;

    constructor(jsonAnalysationService: JSONAnalysationService) {
        this.jsonAnalysationService = jsonAnalysationService;
    }

    private convertFromXMLtoJSON(XMLinput: String): String {
        return "JSONinput"
    }

    public analyseData(XMLinput: String): String {
        const convertedData: String = this.convertFromXMLtoJSON(XMLinput);
        return this.jsonAnalysationService.analyseJsonData(convertedData);
    }
}