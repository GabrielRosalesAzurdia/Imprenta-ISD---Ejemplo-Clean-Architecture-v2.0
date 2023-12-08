import { CardsSelected, LocalStorageFailure, PROCESS } from "@/domain";

export interface GetCardsSelectedLocal{
    fetchData():CardsSelected[]|LocalStorageFailure
    createData():PROCESS.SUCCESS
    saveData(id:number, quantity:number, price:number, name:string):PROCESS.SUCCESS
    updateData(id:number, quantity:number, price:number, name:string):  PROCESS.SUCCESS
    deleteData(id:number, quantity:number, price:number, name:string): PROCESS.SUCCESS
}