# Project Summary

This document is an home assignment test of an application for publishing content to print.

## Application scope

1 - Authentification system with roles management(user, admin)
2 - Users ressource
3 - Templates ressource


###  Admin story

1 - As an admin, i can perform CRUD operations on admin, user and template ressources 

### User story
1 - As a user, i can view available templates only
2 - As a user, i can copy a template created by an admin by providing auth token and role for write access.
3 - As a user, i can view, modify, delete, purge my templates
4 - As a user, i can search through templates based on my criterias

## Ressources

### User:
- Structured data
- Has relationship with other entities
- Need ACID properties in case something went wrong, data will preserve its previous state.

#### Database suggestion : RDBMS technology(mySQL/PostgreSQL)

### Template:
- Unstructured data
- Model flexibility
- Fast write performance

#### Database suggestion : NoSQL technology(MongoDB, Couchbase)


## Database communications

Libraries that can be use to communicate with the databases are the following:
- ORM Such as Sequelize for SQL databases
- ODM Such as Mongoose for MongoDB


## Queries validation

Queries content can be validated by using third-party module such as:
 - express-validator
 - joi


## Pagination Handling

Speaking of pagination handling, we can assume that there must be a template search functionality by user criterias.
Implementing this functionality on which side depends on business logic.
How much space does a single data takes?
What quantity of data is expected ?
What is the frequency of data changes ?  

Once these questions are answered we can choose between: 
- Front-end : fetch all the data then perform operations on the result set. However, sync issues with the server may arise resulting in having old data.
- Back-end : client sends the limit query param, the server fetches the required set result then perform operations on the result set.
However, network issues may arise resulting in slow response time.



## Authentication management

Pre-requisites
- Use Redis as a database for saving user issued token with a timestamp. Set and expiration date for each key.
Just before a user requests an endpoint, fire a Redis request to check for his token if it is still available. 

## Permission management 
 
Pre-requisites
- Set READ/WRITE for specific role to database tables/collections.
- Add role to JSON web token

### Start API
```
/* start server */
npm start
```

### testing test
```
/* run test */
npm run test
```



 