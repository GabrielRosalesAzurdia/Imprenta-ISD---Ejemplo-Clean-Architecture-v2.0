import { ApiFailure, CardsSelected } from "@/domain";

export interface ListCardsSelectedRepository{
    fetchDataApi():Promise<CardsSelected[]|ApiFailure>
}