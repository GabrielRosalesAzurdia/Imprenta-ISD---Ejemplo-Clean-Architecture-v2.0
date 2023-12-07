import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export interface GetCard{
    fetchDataApi(id:number): Promise<Card|ApiFailure>
    fetchDataLocal(id:number): Card | LocalStorageFailure
}