import { ApiFailure, Card } from "@/domain";

export interface GetCardsSelectedApi{
    fetchData():Card[]|ApiFailure
}