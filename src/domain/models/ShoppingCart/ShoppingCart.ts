/**
 * Estructura de un ShoppingCart
 */
export interface ShoppingCart{
    id:number,
    total:number,
    adress:string,
    shippingMethod:number,
    paymentMethod:number,
    open:boolean,
}