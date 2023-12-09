import { LocalStorageFailure, PROCESS, ShoppingCart } from "@/domain";

export interface SaveCallShoppingCart{
    saveShoppingCartLocalStorage(cart:ShoppingCart):PROCESS.SUCCESS|LocalStorageFailure
    callShoppingCartLocalStorage():ShoppingCart|LocalStorageFailure
}