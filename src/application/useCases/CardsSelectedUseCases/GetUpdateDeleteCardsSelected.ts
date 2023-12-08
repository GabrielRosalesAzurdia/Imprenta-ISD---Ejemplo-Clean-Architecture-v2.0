import { CardsSelected, LocalStorageFailure, PROCESS } from "@/domain"

export interface GetUpdateDeleteCardsSelected{
    fetchData():CardsSelected[]|LocalStorageFailure // when on the page carrito or product page
    updateData(id:number, quantity:number):  PROCESS.SUCCESS // diminishing or aumenting the quantity on product or carrito page
    deleteData(id:number): PROCESS.SUCCESS // deleting from carrito or product page
}