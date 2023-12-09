import { ApiFailure, CardsSelected, PROCESS } from "@/domain";

export interface SendApiCardsSelectedRepository{
    sendCardsSelectedApi(newList:CardsSelected[]):Promise<PROCESS.SUCCESS|ApiFailure>
}