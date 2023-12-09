import { ApiFailure, LocalStorageFailure, PROCESS } from "@/domain";

export interface SetIdSendCardsSelected {
    setIdData(shoppingcartid:number):PROCESS.SUCCESS|LocalStorageFailure
    sendData():Promise<PROCESS.SUCCESS|ApiFailure|LocalStorageFailure>
}