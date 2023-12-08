import { LocalStorageFailure, PROCESS } from "@/domain";

export interface AddCardsSelected{
    addData(id:number, quantity:number, price:number):PROCESS.SUCCESS | LocalStorageFailure // on product page
}

//! PORBLEMA:
//! despues de cada cambio se debe guardar la lista otra vez por lo que los use cases estarán llamando 
//! al use case de saveData y eso no se puede hacer

//* SOLUCION:
//* colocar save data no como use case y dejarlo como solo repository, lo bueno es que
//* se vuelve una función del use case class para que no sea repetitivo, espera un momento
//* estos use case ya apuntan al repository de guardado verdad??

//! PROBLEMA:
//! los de delete, update y agregar item solo regresan success pero
//! el repo regresa localFailure si no ha sido inizializado

//* SOLUCION:
//* o inizializo llamando al use case de inizialización o 
//* tiro el failure para que tenga que llamar el inizializador desde 
//* presentation