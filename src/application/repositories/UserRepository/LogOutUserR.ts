import { ApiFailure, LocalStorageFailure, PROCESS } from "@/domain"

export interface LogOutUserR{
    logoutApi(token:string):Promise<PROCESS.SUCCESS|ApiFailure>
    logoutLocalStorage(token:string):PROCESS.SUCCESS|LocalStorageFailure
}