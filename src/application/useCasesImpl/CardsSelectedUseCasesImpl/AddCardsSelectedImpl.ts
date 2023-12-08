import { AddCardsSelected, CallandSaveLocalCardsSelectedRepository } from "@/application";
import { CardsSelected, LocalStorageFailure, LocalStorageFailures, PROCESS } from "@/domain";

export class AddCardsSelectedImpl implements AddCardsSelected{

    constructor(private repository:CallandSaveLocalCardsSelectedRepository){}

    addData(id: number, quantity: number, price: number): PROCESS | LocalStorageFailure {
        let dataList = this.retrieveExistingData();
        if(dataList instanceof LocalStorageFailure){
            return dataList
        }
        dataList.push( {card:id,quantity:quantity,total:(quantity*price),id:undefined,shoppingCartId:undefined} )
        return this.repository.saveCardsSelectedLocal(dataList)
    }

    private retrieveExistingData(): CardsSelected[] | LocalStorageFailure {
        const dataList = this.repository.callCardsSelectedLocal();

        if (dataList instanceof LocalStorageFailure && dataList.sayFailure() === LocalStorageFailures.KEYNOTFOUND) {
            return dataList;
        } else if (dataList instanceof LocalStorageFailure) {
            // errors that have to be solve and do not have to do with initialazing the local storage
            return dataList
        }

        return dataList;
    }
}