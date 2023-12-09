import { SaveCallShoppingCart, SaveGetShoppingCart } from "@/application";
import { PROCESS, LocalStorageFailure, ShoppingCart } from "@/domain";

export class SaveGetShoppingCartImpl implements SaveGetShoppingCart{
    
    constructor(private respository:SaveCallShoppingCart){}

    saveData(total: number, adress: string, shippingMethod: number, paymentMethod: number): PROCESS | LocalStorageFailure {
        let newShoppingCart:ShoppingCart ={
            id:undefined,
            total:total,
            adress:adress,
            shippingMethod:shippingMethod,
            paymentMethod:paymentMethod,
            open:true
        }
        return this.respository.saveShoppingCartLocalStorage(newShoppingCart)
    }

    fetchData(): LocalStorageFailure | ShoppingCart {
        let dataList = this.respository.callShoppingCartLocalStorage()
        return dataList instanceof LocalStorageFailure ? dataList : dataList
    }
}