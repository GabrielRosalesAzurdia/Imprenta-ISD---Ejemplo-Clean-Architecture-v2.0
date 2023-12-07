import { ListCardRepository } from "@/application/repositories"
import { GetCards } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

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