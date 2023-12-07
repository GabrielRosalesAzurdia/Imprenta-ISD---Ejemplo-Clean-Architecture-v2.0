import { ApiFailure, Card, LocalStorageFailure } from "../../models"

export interface GetCard{
    fetchDataApi(id:number): Promise<Card|ApiFailure>
    fetchDataLocal(id:number): Card | LocalStorageFailure
}