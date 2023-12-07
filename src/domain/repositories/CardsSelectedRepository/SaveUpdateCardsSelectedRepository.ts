import { LocalStorageFailure, CardsSelected } from "../../models";

export interface SaveUpdateCardsSelectedRepository{
    saveDataLocal(list:CardsSelected[]):number|LocalStorageFailure
    updateDataLocal(list:CardsSelected[]):number|LocalStorageFailure
}