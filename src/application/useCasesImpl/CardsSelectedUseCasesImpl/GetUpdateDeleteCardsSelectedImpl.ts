import { CallandSaveLocalCardsSelectedRepository, GetUpdateDeleteCardsSelected } from "@/application";
import { CardsSelected, LocalStorageFailure, LocalStorageFailures, PROCESS } from "@/domain";

export class GetUpdateDeleteCardsSelectedImpl implements GetUpdateDeleteCardsSelected{

    constructor(private repository:CallandSaveLocalCardsSelectedRepository){}

    fetchData(): CardsSelected[] | LocalStorageFailure {
        let dataList = this.retrieveExistingData()
        return dataList instanceof LocalStorageFailure ? dataList : dataList
    }

    updateData(id: number, quantity: number): LocalStorageFailure | PROCESS {
        let dataList = this.retrieveExistingData()
        if(dataList instanceof LocalStorageFailure){
            return dataList
        }
        let newDataList = dataList.map(item => {
            if(item.id == id){
                item.total = ((item.total/item.quantity)*quantity)
            }
            return item
        })
        return this.repository.saveCardsSelectedLocal(newDataList)
    }

    deleteData(id: number): LocalStorageFailure | PROCESS {
        let dataList = this.retrieveExistingData()
        if(dataList instanceof LocalStorageFailure){
            return dataList
        }
        let newDataList = dataList.filter(item => item.id != id)
        return this.repository.saveCardsSelectedLocal(newDataList)
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