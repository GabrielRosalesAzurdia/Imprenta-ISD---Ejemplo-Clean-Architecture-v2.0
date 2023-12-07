import { ApiFailure, Card, LocalStorageFailure } from "../../models"

export interface IndividualCardRespository{
    callCardLocalStorage(id:number):Card|LocalStorageFailure
    callCardApi(id:number):Promise<Card|ApiFailure>
}