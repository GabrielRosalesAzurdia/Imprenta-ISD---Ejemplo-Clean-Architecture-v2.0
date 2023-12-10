import { LocalStorageFailure } from "@/domain";

export interface CallToken{
    callTokenLocalStorage():string|LocalStorageFailure
}