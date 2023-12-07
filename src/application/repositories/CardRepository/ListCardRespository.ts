import { ApiFailure, Card, LocalStorageFailure, PROCESS } from "@/domain";

export interface ListCardRepository{
    callCardsLocalStorage():Card[]|LocalStorageFailure,
    callCardsApi():Promise<Card[]|ApiFailure>,
    saveCardsLocalStorage(newList:Card[]):PROCESS.SUCCESS,
}
