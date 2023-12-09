import { ApiFailure, CardsSelected } from "@/domain";

export interface GetCardsSelectedApi{
    fetchDataApi():Promise<CardsSelected[]|ApiFailure>
}