import { ApiFailure, ShoppingCart } from "@/domain";

export interface CallShoppingCartApi{
    callShoppingCartApi(user:number): Promise<ShoppingCart|ApiFailure>
}