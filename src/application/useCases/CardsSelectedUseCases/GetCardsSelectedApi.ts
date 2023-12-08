import { ApiFailure, Card } from "@/domain";

export interface GetCardsSelectedApi{
    fetchData():Promise<Card[]|ApiFailure>
}