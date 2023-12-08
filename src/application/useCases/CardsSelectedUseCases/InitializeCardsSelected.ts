import { CardsSelected, PROCESS } from "@/domain";

export interface AddCardsSelected{
    initializeData(newList:CardsSelected[]):PROCESS.SUCCESS
}