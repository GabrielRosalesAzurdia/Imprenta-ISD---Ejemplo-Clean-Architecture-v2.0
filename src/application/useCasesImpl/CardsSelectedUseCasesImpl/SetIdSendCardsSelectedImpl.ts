import { CallandSaveLocalCardsSelectedRepository, SendApiCardsSelectedRepository, SetIdSendCardsSelected } from "@/application";
import { PROCESS, ApiFailure, LocalStorageFailure } from "@/domain";

export class SetIdSendCardsSelectedImpl implements SetIdSendCardsSelected{

    constructor(private repositorySend:SendApiCardsSelectedRepository, private repositoryList:CallandSaveLocalCardsSelectedRepository){}

    setIdData(shoopingcartid:number): PROCESS | LocalStorageFailure {
        let dataList = this.repositoryList.callCardsSelectedLocal()
        if(dataList instanceof LocalStorageFailure){
            return dataList
        }
        let newDataList = dataList.map(item => {
            item.shoppingCartId = shoopingcartid 
            return item
        })
        return this.repositoryList.saveCardsSelectedLocal(newDataList)
    }

    sendData(): Promise<ApiFailure | PROCESS | LocalStorageFailure>  {
        let dataList = this.repositoryList.callCardsSelectedLocal()
        if(dataList instanceof LocalStorageFailure){
            return Promise.resolve(dataList)
        }
        return this.repositorySend.sendCardsSelectedApi(dataList)
    }

}