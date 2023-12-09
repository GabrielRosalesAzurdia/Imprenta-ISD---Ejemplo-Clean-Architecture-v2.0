import { ApiFailure, PROCESS, ShoppingCart } from "@/domain";

export interface PutShoppingCart{
    sendShoppingCartApi(cart:ShoppingCart):Promise<PROCESS.SUCCESS|ApiFailure>
}