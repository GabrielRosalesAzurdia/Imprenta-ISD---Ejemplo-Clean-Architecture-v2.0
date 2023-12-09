import { LocalStorageFailure, PROCESS } from "@/domain";

export interface AddCardsSelected{
    addData(id:number, quantity:number, price:number):PROCESS.SUCCESS | LocalStorageFailure // on product page
}