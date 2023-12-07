import { Card, ApiFailure, LocalStorageFailure } from "../../models";
import { IndividualCardRespository } from "../../repositories";
import { GetCard } from "../../usecases";

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