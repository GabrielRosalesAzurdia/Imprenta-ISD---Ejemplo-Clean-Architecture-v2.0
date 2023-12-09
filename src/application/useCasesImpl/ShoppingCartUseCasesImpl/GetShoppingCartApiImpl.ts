import { CallShoppingCartApi, GetShoppingCartApi } from "@/application";
import { ApiFailure, ShoppingCart } from "@/domain";

export class GetShoppingCartApiImpl implements GetShoppingCartApi{

    constructor(private repository:CallShoppingCartApi){}
   
    fetchDataApi(user: number): Promise<ShoppingCart | ApiFailure> {
        return this.repository.callShoppingCartApi(user)
    }

}