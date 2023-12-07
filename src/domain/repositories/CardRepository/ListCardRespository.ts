import { ApiFailure, Card, LocalStorageFailure } from "../../models";

export interface ListCardRepository{
    callCardsLocalStorage():Card[]|LocalStorageFailure
    callCardsApi():Promise<Card[]|ApiFailure>,
}
