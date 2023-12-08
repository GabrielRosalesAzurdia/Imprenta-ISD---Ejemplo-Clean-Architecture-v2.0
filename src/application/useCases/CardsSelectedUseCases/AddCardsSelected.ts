import { PROCESS } from "@/domain";

export interface InitializeCardsSelected{
    addData(id:number, quantity:number, price:number, name:string):PROCESS.SUCCESS // on product page
}

//! PORBLEMAS :
//! despues de cada cambio se debe guardar la lista otra vez por lo que los use cases estarán llamando 
//! al use case de saveData y eso no se puede hacer

//* SOLUCIONES:
//* colocar save data no como use case y dejarlo como solo repository, lo bueno es que
//* se vuelve una función del use case class para que no sea repetitivo, espera un momento
//* estos use case ya apuntan al repository de guardado verdad??