import { InitializeCardsSelected, InitializeConnectionCardsSelected } from "@/application";
import { PROCESS } from "@/domain";

export class InitializeCardsSelectedImpl implements InitializeCardsSelected{
    
    constructor(private repository:InitializeConnectionCardsSelected){}
    
    initializeData(): PROCESS {
        return this.repository.initializeLocalStorage()
    }

}