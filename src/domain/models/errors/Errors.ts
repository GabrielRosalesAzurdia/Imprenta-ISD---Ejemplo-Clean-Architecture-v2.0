/**
 * Estructura de errores
 * Estos pueden crashear la aplicación
 */

export class LocalStorageError extends Error {
    /**
     * Crea un error con un mensaje
     * @param msg Mensaje para el error
     */
    constructor(msg:string){
        super(msg)
        Object.setPrototypeOf(this, LocalStorageError.prototype);
    }
}

export class ApiError extends Error {
    /**
     * Crea un error con un mensaje
     * @param msg Mensaje para el error
     */
    constructor(msg:string){
        super(msg)
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

