import { ApiFailure, CardsSelected } from "@/domain";

export interface CallApiCardsSelectedRepository{
    callCardsSelectedApi():Promise<CardsSelected[]|ApiFailure>
}