import { Card, LocalStorageFailure } from "@/domain";

export interface GetCardsSelected{
    fetchData():Card[]|LocalStorageFailure
}