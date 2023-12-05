/**
 * Representa un Failure genérico, estos no crashean la app
 */
export class Failure{}

/**
 * Fallo del localStorage
 */
export class LocalStorageFailure extends Failure{

}

/**
 * Fallo de la API
 */

export class ApiFailure extends Failure{

}
