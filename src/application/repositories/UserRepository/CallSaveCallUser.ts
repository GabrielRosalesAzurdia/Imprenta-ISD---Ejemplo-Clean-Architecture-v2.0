import { ApiFailure, LocalStorageError, LocalStorageFailure, PROCESS, User } from "@/domain";

export interface CallSaveCallUser{
    callUserApi(token:string):Promise<User|ApiFailure>
    saveUserLocalStorage(user:User):PROCESS.SUCCESS|LocalStorageError
    callUserLocalStorage():User|LocalStorageFailure
}