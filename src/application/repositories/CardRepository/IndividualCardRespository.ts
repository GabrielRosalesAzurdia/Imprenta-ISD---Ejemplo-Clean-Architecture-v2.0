import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export interface IndividualCardRespository{
    callCardLocalStorage(id:number):Card|LocalStorageFailure
    callCardApi(id:number):Promise<Card|ApiFailure>
}