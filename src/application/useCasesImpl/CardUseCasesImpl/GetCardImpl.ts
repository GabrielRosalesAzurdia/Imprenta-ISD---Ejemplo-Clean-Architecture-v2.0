import { IndividualCardRespository, ListCardRepository } from "@/application/repositories"
import { GetCard } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export class GetCardImpl implements GetCard{

    constructor(private repositoryAPI:IndividualCardRespository,private repositoryLOCAL:ListCardRepository){

    }

    fetchDataLocal(id: number): Card | LocalStorageFailure {
        let data = this.repositoryLOCAL.callCardsLocalStorage()
        if(data instanceof LocalStorageFailure){
            return LocalStorageFailure
        }
        return data.map(card=>{
            if (card.id == id){
                return card
            }
        })
    }

    fetchDataApi(id:number): Promise<Card | ApiFailure> {
        return this.repositoryAPI.callCardApi(id)
    }
}