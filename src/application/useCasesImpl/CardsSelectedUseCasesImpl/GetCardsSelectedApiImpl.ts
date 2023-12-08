import { CallApiCardsSelectedRepository, GetCardsSelectedApi } from "@/application";
import { ApiFailure, CardsSelected } from "@/domain";

export class GetCardsSelectedApiImpl implements GetCardsSelectedApi{
    
    constructor(private repository:CallApiCardsSelectedRepository){}

    fetchData(): Promise<CardsSelected[] | ApiFailure> {
        return this.repository.callCardsSelectedApi()
    }
}