import { IndividualCardRespository } from "@/application/repositories"
import { GetCard } from "@/application/useCases"
import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export class GetCardImpl implements GetCard{

    constructor(private repository:IndividualCardRespository){

    }

    fetchDataApi(id:number): Promise<Card | ApiFailure> {
        return this.repository.callCardApi(id)
    }

    fetchDataLocal(id:number): Card | LocalStorageFailure {
        return this.repository.callCardLocalStorage(id)
    }

}