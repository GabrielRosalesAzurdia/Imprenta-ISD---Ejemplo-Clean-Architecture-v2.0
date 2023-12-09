/**
 * Estructura de un ShoppingCart
 */
export interface ShoppingCart{
    id:number|undefined,
    total:number,
    adress:string,
    shippingMethod:number,
    paymentMethod:number,
    open:boolean,
}