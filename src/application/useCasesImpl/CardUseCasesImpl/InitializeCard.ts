import { InitializeCard, InitializeConectionCard,  } from "@/application";
import { PROCESS } from "@/domain";

export class InitializeImpl implements InitializeCard{

    constructor(private repository:InitializeConectionCard){}

    initializeDataLocal(): PROCESS {
        return this.repository.intializeLocalStorage()
    }

}