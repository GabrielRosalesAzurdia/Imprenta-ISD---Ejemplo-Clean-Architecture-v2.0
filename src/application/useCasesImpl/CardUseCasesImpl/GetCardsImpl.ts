import { ListCardRepository } from "@/application/repositories"
import { GetCards } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure, LocalStorageFailures, PROCESS } from "@/domain"

export class GetCardsImpl implements GetCards{

    constructor(private repository:ListCardRepository){
        
    }

    fetchDataLocal(): Card[] | LocalStorageFailure {
        let result = this.repository.callCardsLocalStorage()
        if(result instanceof LocalStorageFailure && result.sayFailure() == LocalStorageFailures.KEYNOTFOUND){
            return result
        }else if (result instanceof LocalStorageFailure){
            // errors that have to be solve and do not have to do with initialazing the local storage
            return result
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