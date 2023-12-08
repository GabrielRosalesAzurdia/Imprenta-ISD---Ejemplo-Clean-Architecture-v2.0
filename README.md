# Imprenta ISD - Ejemplo Clean Architecture v2.0

## Mockup

[Figma mockup](https://www.figma.com/file/g14odnhsn5pYUrzD41eZYe/IMPRENTA-ISD?type=design&node-id=1523%3A2&mode=design&t=hSTwtRv2VanjviXA-1)

## Clean Architecture

La clean architecture es una forma de estructurar un proyecto en capas, 
definiendo que entidades y que trozos de código pueden interactuar con otros
causando una dependencia inversa.
Los beneficios de esto no es solamente el órden, también que cambiar partes 
del código es mucho más fácil, al estar aisladas, por ejemplo cambiar una 
llamada a api es muy sencillo pues las entidades son internas solo se cambia el
repositorio o cambiar el framework de UI solo se cambia la capa presentación

## Mapa de nuestra arquitectura

El mapa está en la carpeta de docs definiendo las carpetas
y lo que se puede encontrar dentro de ellas, especificamente
de lo que se encarga cada cosa


## Domain

Tiene carpetas models, repostorycontracts, usecasescontracts, usecasesimpl

Empezando con esto tenemos que definir que errrores y que entidades vamos a 
tener en nuestra app

Las entidades para esta tienda de tarjetas serán las siguientes, junto con sus atributos, casos de uso y llamadas a API o almacenamiento local: 

### Card (local y api)
    - name (string)
    - description (string)
    - price (float)
    - id (int)
    - discount (bool)
    - discountPorcentage (float)

    Use Cases:
    - Tomar lista de Card Local y Api
    - Tomar Card individual Local y Api
    - Crear lista de Card Local

    Repository:
    Grupo 1
    - Llamar Card individual Api
    Grupo 2
    - Llamar a todas las Card API
    - Llamar a todas las Card Local
    - Guardar todas las Card Local
    Grupo 3
    - Inicializar

### User (local y api)
    - name (string)
    - surname (string)
    - adress (string)
    - password (string)
    - phoneNumber (string)
    - email (string)
    - photo (string)

    Use Cases:
    - Representar a un usuario
    - Iniciar seción
    - Cerrar seción
    - Registrar un usuario
    - Actualiza datos del usuario

    Repository:
    - Llamar un usuario API
    - Login API
    - Logout API
    - Signup API
    - Actualizar dirección API

### CardsSelected (local y api)
    - id (number | undefined)
    - shoppingCartId (number | undefined)
    - card (Card.id)
    - quantity (int)
    - total (float)

    Use Cases:
    - Agregar una tarjeta al carito
    - Llamar los miembros de un pedido terminado
    - Tomar tarjetas, actualizar y eliminar
    - Inicializar
    - Enviar a API

    Repository:
    Grupo 1
    - Llamar a los elementos de un carrito terminado  API
    Grupo 2
    - Llamar a los elementos de un carrito LOCAL
    - Guardar carrito LOCAL
    Grupo 3
    - Inicializar
    Grupo 4
    - Enviar a API

### ShoppingCart (local)
    - id (int | undefined)
    - total (float)
    - user (User.id)
    - adress (string)
    - shippingMethod (int)
    - paymentMethod (int)
    - open (bool)

    Use Cases:
    - Inicializar
    - Crear Carrito
    - Enviar carrito a API
    - Traer carritos terminados de API

    Repository:
    Grupo 1
    - Inicializar
    Grupo 2
    - Crear Carrito
    Grupo 3
    - Convertirse en una orden API
    Grupo 4
    - Traer las ordenes de un usuario API

" the id is null until is given by the API until then is just local stuff "
" the same happens with CardsSelected "
" You first send the cart, save id and give it to the cardsSelected " 

### LocalStorageError
    - msg (string)

### ApiError
    - msg (string)

### LocalStorageFailure
    no data

### ApiFailure
    no data

## tools used

[Union string | number](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)

Barrel index file on typescript

## To do next

- Implement new Use Case layer

- Do the use cases and the repostory contracts

- Agregar ENUM 1 = success

## Special Notes

### Flow

Flujo de trabajo con array en caso de actualizar

Presentation Layer:
The presentation layer receives input from the user or external systems. In the context of updating an element in an array, this might involve capturing user input through a user interface or receiving data from external sources.

Use Case Layer:
The use case layer contains the application's business logic. In the scenario of updating an element in an array, the use case would be responsible for processing the received data, updating the appropriate object in the array, and deciding how to proceed.

Entity & Domain Layer:
This layer holds the domain models and entities of your application. In the case of an array of objects, the relevant entity or domain model representing the array and its elements would be found here.

Repository Interface Layer:
The repository interfaces define contracts for data access operations. If you're dealing with local storage, you might have a repository interface specifying methods like saveData and getData. This is where the interfaces come into play, defining how the use case can interact with data storage without specifying the implementation details.

Infrastructure Layer:
The infrastructure layer contains concrete implementations of the repository interfaces. In this case, it would include a repository implementation responsible for translating the domain objects (array of objects) to JSON and saving it to local storage. Additionally, it retrieves data from local storage and translates it back into domain objects.

### Habilitando Barrel

Corremos el código ( se debe de reiniciar la app luego )

> npm i -D @types/node

y en el compiler debe de alterarse a lo siguiente :

>   "compilerOptions": {
>    "types": ["node"], 
>		"paths": {
>			"@/*": ["./src/*"] 
>		},