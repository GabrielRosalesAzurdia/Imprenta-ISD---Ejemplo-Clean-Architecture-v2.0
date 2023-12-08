import { ApiFailure, CardsSelected, PROCESS } from "@/domain";

export interface SendApiCardsSelectedRepository{
    sendData(newList:CardsSelected[]):Promise<PROCESS.SUCCESS|ApiFailure>
}