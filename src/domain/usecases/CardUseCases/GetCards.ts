import { ApiFailure, Card, LocalStorageFailure } from "../../models";

export interface GetCards{
    fetchDataApi(): Promise<Card[]|ApiFailure>
    fetchDataLocal(): Card[] | LocalStorageFailure
}