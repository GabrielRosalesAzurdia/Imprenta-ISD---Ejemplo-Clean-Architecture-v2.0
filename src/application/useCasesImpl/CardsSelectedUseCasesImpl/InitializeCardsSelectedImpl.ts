import { InitializeCardsSelected, InitializeConnectionCardsSelected } from "@/application";
import { CardsSelected, PROCESS } from "@/domain";

export class InitializeCardsSelectedImpl implements InitializeCardsSelected{
    
    constructor(private repository:InitializeConnectionCardsSelected){}
    
    initializeData(newList: CardsSelected[]): PROCESS {
        return this.repository.initializeLocalStorage()
    }

}