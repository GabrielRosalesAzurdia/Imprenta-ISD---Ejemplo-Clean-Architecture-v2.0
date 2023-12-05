# Imprenta ISD - Ejemplo Clean Architecture v2.0

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

Las entidades para esta tienda de tarjetas serán: 

### Card (local y api)
    - name (string)
    - description (string)
    - price (float)
    - id (int)
    - discount (bool)
    - discountPorcentage (float)

### CardList (local y api)
    - cards (array[Card])

### User (local y api)
    - name (string)
    - surname (string)
    - adress (string)
    - password (string)
    - phoneNumber (string)
    - email (string)
    - photo (string)

### CardsSelected (local y api)
    - id (int)
    - card (Card.id)
    - quantity (int)
    - total (float)

### ShoppingCart (local)
    - id (int)
    - total (float)
    - user (User.id)
    - adress (string)
    - shippingMethod (int)
    - paymentMethod (int)
    - cards (array[CardsSelected])

### Order (api)
    - id (int)
    - total (float)
    - adress (string)
    - shippingMethod (int)
    - paymentMethod (int)
    - cards (array[CardSelected])

### LocalStorageError
    - msg (string)

### ApiError
    - msg (string)

### LocalStorageFailure
    no data

### ApiFailure
    no data

