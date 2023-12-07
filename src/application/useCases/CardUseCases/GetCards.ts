import { ApiFailure, Card, LocalStorageFailure } from "@/domain"

export interface GetCards{
    fetchDataApi(): Promise<Card[]|ApiFailure>
    fetchDataLocal(): Card[] | LocalStorageFailure
}