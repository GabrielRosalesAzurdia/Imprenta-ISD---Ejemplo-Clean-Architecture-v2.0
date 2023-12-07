import { LocalStorageFailure } from "@/domain";

export interface DeleteCardsSelectedRepository {
    deleteDataLocal(id:number):number|LocalStorageFailure
}