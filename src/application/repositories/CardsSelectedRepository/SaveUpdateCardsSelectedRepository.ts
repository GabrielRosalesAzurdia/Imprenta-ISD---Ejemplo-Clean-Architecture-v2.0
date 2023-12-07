import { CardsSelected, LocalStorageFailure } from "@/domain"

export interface SaveUpdateCardsSelectedRepository{
    saveDataLocal(list:CardsSelected[]):number|LocalStorageFailure
    updateDataLocal(list:CardsSelected[]):number|LocalStorageFailure
}