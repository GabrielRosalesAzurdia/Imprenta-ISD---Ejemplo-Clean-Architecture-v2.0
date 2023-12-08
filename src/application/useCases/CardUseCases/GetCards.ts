import { ApiFailure, Card, LocalStorageFailure, PROCESS } from "@/domain"

export interface GetCards{
    fetchDataApi(): Promise<Card[]|ApiFailure>
    fetchDataLocal(): Card[] | LocalStorageFailure
    saveDataLocal(newList:Card[]): PROCESS.SUCCESS
}