import { ApiFailure, LocalStorageFailure, PROCESS } from "@/domain";

export interface LoginCreateSaveUser {
    loginUserApi(email:string,password:string):Promise<string|ApiFailure>
    createUserApi(name:string,surname:string,email:string,phone:string,password:string):Promise<string|ApiFailure>
    saveTokenApi(token:string):PROCESS.SUCCESS|LocalStorageFailure
}