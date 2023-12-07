import { ApiFailure, Card, LocalStorageFailure } from "../../models";
import { ListCardRepository } from "../../repositories";
import { GetCards } from "../../usecases";


export class GetCardsImpl implements GetCards{

    constructor(private repository:ListCardRepository){
        
    }

    fetchDataLocal(): Card[]|LocalStorageFailure {
        return this.repository.callCardsLocalStorage()
    }

    fetchDataApi(): Promise<Card[]|ApiFailure> {
        return this.repository.callCardsApi()
    }

}