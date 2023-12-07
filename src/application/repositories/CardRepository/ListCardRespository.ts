import { ApiFailure, Card, LocalStorageFailure } from "@/domain";

export interface ListCardRepository{
    callCardsLocalStorage():Card[]|LocalStorageFailure
    callCardsApi():Promise<Card[]|ApiFailure>,
}
