import { ListCardRepository } from "@/application/repositories"
import { GetCards } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure, LocalStorageFailures, PROCESS } from "@/domain"

export class GetCardsImpl implements GetCards{

    constructor(private repository:ListCardRepository){
        
    }
    
    initializeDataLocal(): PROCESS.SUCCESS {
        return this.repository.saveCardsLocalStorage([])
    }

    fetchDataLocal(): Card[] | LocalStorageFailure {
        let result = this.repository.callCardsLocalStorage()
        if(result instanceof LocalStorageFailure && result.sayFailure() == LocalStorageFailures.KEYNOTFOUND){
            return result
        }else if (result instanceof LocalStorageFailure && result.sayFailure() != LocalStorageFailures.KEYNOTFOUND){
            return new LocalStorageFailure(LocalStorageFailures.UNEXPECTEDERROR)
        }
        return result
    }

    fetchDataApi(): Promise<Card[]|ApiFailure> {
        return this.repository.callCardsApi()
    }

    saveDataLocal(newList : Card[]): PROCESS.SUCCESS {
        return this.repository.saveCardsLocalStorage(newList)
    }

}