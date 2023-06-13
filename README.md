# API SQL

Aplicación que permite al usuario realizar métodos GET, POST, PUT y DELETE que aplican cambios sobre una base de datos SQL.

## Tabla de contenidos

- [Objetivo](#objetivo)
  - [Fases](#fases)
  - [Endpoints](#endpoints)
  - [Links](#links)
- [Proceso](#Proceso)
  - [Construido con](#construido-con)
  - [Puntos clave](#puntos-clave)

## Objetivo

- Podrán realizarse 4 consultas a través de solicitudes GET: ver todos los autores, ver todas las entradas, buscar un autor por su email o buscar todas las entradas de un autor por su email.
- Podrán introducirse nuevos autores y nuevas entradas a través de solicitudes POST.
- Podrán modificarse autores o entradas ya existentes a través de solicitudes PUT.
- Podrán eliminarse tanto autores como entradas a través de solicitud DELETE, teniendo en cuenta que al eliminar un autor se eliminarán todas sus entradas.

### Endpoints

GET
- Para obtener todas las entradas: https://api-sql-mmm3.onrender.com/api/entries
- Para obtener las entradas de un autor: https://api-sql-mmm3.onrender.com/api/entries?email=<author_email>
- Para obtener todos los autores: https://api-sql-mmm3.onrender.com/api/authors
- Para obtener un autor por su email: https://api-sql-mmm3.onrender.com/api/authors?email=<author_email>

POST
- Crear un nuevo autor: https://api-sql-mmm3.onrender.com/api/authors. En el body se incluirá:
{ 
  "name": "", 
  "surname": "",
  "email": "",
  "image": ""
}
- Crear una nueva entrada: https://api-sql-mmm3.onrender.com/api/entries. En el body se incluirá:
{ 
    "title": "", 
    "content": "",
    "email": "",
    "category": ""
}

PUT
- Modificar un autor: https://api-sql-mmm3.onrender.com/api/authors. En el body se incluirá:
{ 
  "email": "",
  "name": "", 
  "surname": "",
  "image": ""
}
- Modificar una entrada entrada: https://api-sql-mmm3.onrender.com/api/entries. En el body se incluirá:
{ 
    "title": "", 
    "newTitle": "", 
    "content": "",
    "email": "",
    "category": ""
}

DELETE
- Eliminar un autor: https://api-sql-mmm3.onrender.com/api/authors. En el body se incluirá:
{
  "email": ""
}
- Eliminar una entrada: https://api-sql-mmm3.onrender.com/api/entries. En el body se incluirá:
{
  "title": ""
}



### Links

- Repositorio: [ejercicio-api-sql](https://github.com/Radu-A/ejercicio-api-sql)
- Live Site: [Demo](https://api-sql-mmm3.onrender.com)

## Proceso

### Construido con

- Javascript
- Node
- Express
- Docker y PgAdmin en fase de desarrollo
- ElephantSql
- Render

### Puntos clave

- Creación de base de datos y de las tablas correspondientes, teniendo en cuenta el modelo relacional y la eliminación en cascada
- Conexión a la base de datos desde express mediante los módulos proporcionados por "pg" (PostgreSQL)
- Subdivisión de módulos propios para ordenar el código de la app
- Enrutamiento y empleo de middlewares
- Uso de morgan para visualizar logs
- Despliegue de la base de datos en ElephantSQL
- Despliegue de la aplicación en Render
