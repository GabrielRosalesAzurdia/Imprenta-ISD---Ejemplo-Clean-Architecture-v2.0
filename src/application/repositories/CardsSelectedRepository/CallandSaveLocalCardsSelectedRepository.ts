import { CardsSelected, LocalStorageFailure, PROCESS } from "@/domain";

export interface CallandSaveLocalCardsSelectedRepository {
    callCardsSelectedLocal():CardsSelected[]|LocalStorageFailure
    saveCardsSelectedLocal(newList:CardsSelected[]):PROCESS.SUCCESS
}