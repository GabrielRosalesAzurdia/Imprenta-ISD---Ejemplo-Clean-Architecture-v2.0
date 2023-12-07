import { LocalStorageFailure } from "../../models";

export interface DeleteCardsSelectedRepository {
    deleteDataLocal(id:number):number|LocalStorageFailure
}