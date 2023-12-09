import { LocalStorageFailure, PROCESS, ShoppingCart } from "@/domain";

export interface SaveGetShoppingCart{
    saveData(total:number,adress:string,shippingMethod:number,paymentMethod:number):PROCESS.SUCCESS|LocalStorageFailure
    fetchData():ShoppingCart|LocalStorageFailure
}