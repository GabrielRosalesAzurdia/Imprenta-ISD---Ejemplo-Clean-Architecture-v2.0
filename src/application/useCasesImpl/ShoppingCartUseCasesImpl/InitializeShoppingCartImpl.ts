import { InitializeConnectionShoppingCart, InitializeShoppingCart } from "@/application";
import { PROCESS } from "@/domain";

export class InitializeShoppingCartImpl implements InitializeShoppingCart{

    constructor(private repository:InitializeConnectionShoppingCart){}

    initializeData(): PROCESS {
        return this.repository.initializeLocalStorage()
    }

}