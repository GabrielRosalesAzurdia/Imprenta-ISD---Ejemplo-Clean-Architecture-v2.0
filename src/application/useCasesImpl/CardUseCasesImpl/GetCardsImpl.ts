import { ListCardRepository } from "@/application/repositories"
import { GetCards } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export class GetCardsImpl implements GetCards{

    constructor(private repository:ListCardRepository){
        
    }

    fetchDataLocal(): Card[] | LocalStorageFailure {
        let result: Card[] | LocalStorageFailure = this.repository.callCardsLocalStorage()
        if(result instanceof LocalStorageFailure){
            let resultApi: Promise<Card[]|ApiFailure> = this.fetchDataApi()
            return resultApi.then(answer => {
                if(answer instanceof ApiFailure){
                    return LocalStorageFailure
                }
                this.repository.saveCardsLocalStorage(answer)
                return answer
            })
        }
        return result
    }

    fetchDataApi(): Promise<Card[]|ApiFailure> {
        return this.repository.callCardsApi()
    }

}