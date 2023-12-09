import { ApiFailure, ShoppingCart } from "@/domain";

export interface GetShoppingCartApi{
    fetchDataApi(user:number): Promise<ShoppingCart|ApiFailure>
}