/**
 * Representa un Failure genérico, estos no crashean la app
 */
export class Failure{}

/**
 * Fallo del localStorage
 */

export enum LocalStorageFailures{
    KEYNOTFOUND,
    UNEXPECTEDERROR,
    OBJECTNOTINLOCAL,
}
export class LocalStorageFailure extends Failure{
    failure : LocalStorageFailures
    constructor(failure:LocalStorageFailures){
        super()
        this.failure = failure
    }
    sayFailure(){
        return this.failure
    }
}
/**
 * Fallo de la API
 */
export enum ApiFailures{
    NOTCONNECTED,
    NOTFOUND,
    NODATA,
    NOPERMISSION
}
export class ApiFailure extends Failure{
    failure : ApiFailures
    constructor(failure : ApiFailures){
        super()
        this.failure = failure
    }
    sayFailure(){
        return this.failure
    }
}
