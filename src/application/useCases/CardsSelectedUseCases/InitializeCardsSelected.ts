import { CardsSelected, PROCESS } from "@/domain";

export interface InitializeCardsSelected{
    initializeData(newList:CardsSelected[]):PROCESS.SUCCESS
}