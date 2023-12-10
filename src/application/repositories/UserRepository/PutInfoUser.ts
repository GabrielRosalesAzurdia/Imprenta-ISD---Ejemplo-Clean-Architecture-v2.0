import { ApiFailure, PROCESS } from "@/domain";

export interface PutInfoUser{
    putInfoUserApi(token:string,adress:string):Promise<PROCESS.SUCCESS|ApiFailure>
}