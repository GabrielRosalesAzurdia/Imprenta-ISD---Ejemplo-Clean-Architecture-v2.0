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
    - Representar una Card

    Repository:
    - Llamar una Card en específico API
    - Llamar a todas las Card API


//! idk if this is going to stay, we can manage just like []Card and not an entity on its own

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
    - id (int | undefined)
    - shoppingCartId (number | undefined)
    - card (Card.id)
    - quantity (int)
    - total (float)

    Use Cases:
    - Representar un item en el carrito de compras
    - Total por la cantidad de tarjetas

    Repository:
    - Llamar a los elementos de un carrito  API
    - Guardar en base de datos API
    - Eliminar a los elementos de un carrito LOCAL

### ShoppingCart (local)
    - id (int | undefined)
    - total (float)
    - user (User.id)
    - adress (string)
    - shippingMethod (int)
    - paymentMethod (int)
    - open (bool)

    Use Cases:
    - Dar total de compra
    - Darle al usuario una compra

    Repository:
    - Convertirse en una orden API
    - Traer las ordenes de un usuario API
    - Guardar en la base de datos API
    - Eliminar shoppingCart LOCAL

" the id is null until is given by the API until then is just local stuff "
" the same happens with CardsSelected "

### LocalStorageError
    - msg (string)

### ApiError
    - msg (string)

### LocalStorageFailure
    no data

### ApiFailure
    no data

# tools used

[Union string | number](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)

Barrel index file on typescript