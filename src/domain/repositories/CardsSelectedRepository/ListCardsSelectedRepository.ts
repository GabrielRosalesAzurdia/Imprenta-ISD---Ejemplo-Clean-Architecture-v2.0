import { ApiFailure, CardsSelected } from "../../models";

export interface ListCardsSelectedRepository{
    fetchDataApi():Promise<CardsSelected[]|ApiFailure>
}