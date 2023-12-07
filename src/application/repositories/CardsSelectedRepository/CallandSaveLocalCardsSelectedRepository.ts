import { CardsSelected, LocalStorageFailure } from "@/domain";

export interface CallandSaveLocalCardsSelectedRepository {
    callCardsSelectedLocal():CardsSelected[]|LocalStorageFailure
    saveCardsSelectedLocal(newList:CardsSelected[]):number|LocalStorageFailure
}