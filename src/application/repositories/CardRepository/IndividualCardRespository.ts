import { ApiFailure, Card } from "@/domain"

export interface IndividualCardRespository{
    callCardApi(id:number):Promise<Card|ApiFailure>
}