import { IndividualCardRespository, ListCardRepository } from "@/application/repositories"
import { GetCard } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure, LocalStorageFailures } from "@/domain"

export class GetCardImpl implements GetCard{

    constructor(private repositoryAPI:IndividualCardRespository,private repositoryLOCAL:ListCardRepository){

    }

    fetchDataLocal(id: number): Card | LocalStorageFailure {
        let data = this.repositoryLOCAL.callCardsLocalStorage()
        if(data instanceof LocalStorageFailure){
            return data
        }
        for(let i = 0; i<data.length; i++){
            if(data[i].id == id){
                return data[i]
            }
        }
        return new LocalStorageFailure(LocalStorageFailures.OBJECTNOTINLOCAL)
    }

    fetchDataApi(id:number): Promise<Card | ApiFailure> {
        return this.repositoryAPI.callCardApi(id)
    }
}