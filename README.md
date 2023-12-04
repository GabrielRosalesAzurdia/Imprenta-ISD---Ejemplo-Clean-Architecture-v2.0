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

## Capa por capa

### Domain

Tiene carpetas models, repostorycontracts, usecasescontracts, usecasesimpl

Empezando con esto tenemos que definir que errrores y que entidades vamos a 
tener en nuestra app

Las entidades para esta tienda de tarjetas serán: 
    