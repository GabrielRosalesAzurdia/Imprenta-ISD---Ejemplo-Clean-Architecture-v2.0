import { ApiFailure, CardsSelected } from "@/domain";

export interface GetCardsSelectedApi{
    fetchData():Promise<CardsSelected[]|ApiFailure>
}