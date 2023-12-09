import { ApiFailure, PROCESS, ShoppingCart } from "@/domain";

export interface SendShoppingCart{
    sendData(cart:ShoppingCart):Promise<PROCESS.SUCCESS|ApiFailure>
}