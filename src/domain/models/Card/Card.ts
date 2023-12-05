/**
 * Estructura de una Card
 */
export interface Card {
    name:string,
    description:string,
    price:number,
    id:number,
    discout:boolean,
    discountPorcentage:number,
}