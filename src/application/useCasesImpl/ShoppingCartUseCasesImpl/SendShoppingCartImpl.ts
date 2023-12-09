import { PutShoppingCart, SendShoppingCart } from "@/application";
import { ShoppingCart, PROCESS, ApiFailure } from "@/domain";

export class SendShoppingCartImpl implements SendShoppingCart{

    constructor(private repository:PutShoppingCart){}
    
    sendData(cart: ShoppingCart): Promise<PROCESS | ApiFailure> {
        return this.repository.sendShoppingCartApi(cart)
    }

}