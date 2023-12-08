import { ApiFailure, LocalStorageFailure, PROCESS } from "@/domain";

export interface SetIdSendCardsSelected {
    setIdCardsSelected(shoppingcartid:number):PROCESS.SUCCESS|LocalStorageFailure
    sendApiCardsSelected():Promise<PROCESS.SUCCESS|ApiFailure|LocalStorageFailure>
}