# Documentação API REST - MosquitoZero

Documentação da API REST do [MosquitoZero](https://github.com/GusttaFS/mosquitozero-backend), um sistema projetado para os agentes de vigilância, com o objetivo de permitir o registro eletrônico dos dados coletados durante as inspeções domiciliares para identificação de focos de mosquitos.

## Sumário

### User

- [Criar um usuário](#Criar-um-usuário)
- [Realizar o Login](#Realizar-o-Login)
- [Obter os dados do usuário](#Obter-os-dados-do-usuário)
- [Atualizar os dados do usuário](#Atualizar-os-dados-do-usuário)


## Endpoints

### *Criar um usuário*

Este endpoint permite o cadastro do usuário no sistema fornecendo o e-mail, a senha, o nome e o "data", um objeto *JSON* que deve conter os demais dados necessários para o cadastro do usuário. Em retorno receberá um *JSON* contendo o usuário recém cadastrado no sistema do MosquitoZero.

#### URL
````
POST /user
````

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `email` | String | Obrigatório | O endereço de e-mail para o usuário. |
| `password` | String | Obrigatório | A senha para a conta do usuário. |
| `name` | String | Obrigatório | O nome do usuário. |
| `data` | *JSON* | Obrigatório | As informações restantes do usuário. |

#### Exemplo

* Body
````
{
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "data": {
        "phoneNumber": "(00) 90000-0000",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    }
}
````

* cURL
````
curl --location 'localhost:8080/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "data": {
        "phoneNumber": "(00) 90000-0000",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    }
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `201 CREATED` | *JSON* contendo os campos `id`, `email`, `name`, `data` e `created_at`. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "data": {
        "phoneNumber": "(00) 90000-0000",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    },
    "created_at": "2024-03-13T23:05:02.431Z"
}
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `400 Bad Request` | *JSON* contendo uma mensagem refrente ao erro. |
| `500 Internal Server Error` | *JSON* contendo uma mensagem refrente ao erro. |

#### Exemplo 

* `400 Bad Request`
````
{
    "error": "data is not set"
}
````

````
{
    "error": "email can't be empty"
}
````

* `500 Internal Server Error`
````
{
    "status": "error",
    "menssage": "Internal server error"
}
````

----
### *Realizar o Login*

Este endpoint permite o login do usuário no sistema fornecendo o e-mail e senha previamente cadastrado. Em retorno receberá um *JSON* contendo o token responsável por permitir o acesso aos recursos protegidos dentro do sistema do MosquitoZero.

#### URL
````
POST /login
````

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `email` | String | Obrigatório | O endereço de e-mail do usuário. |
| `password` | String | Obrigatório | A senha associada à conta do usuário. |

#### Exemplo

* Body
````
{
    "email": "user@email.com",
    "password": "mypassword"
}
````

* cURL
````
curl --location 'localhost:8080/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user@email.com",
    "password": "mypassword"
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` |  *JSON* contendo os campos `id`, `email` e `token` do usuário. |

#### Exemplo 
````
{
    "id": "97d7c3cb-6875-4686-8500-149f8657d63e",
    "email": "user@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AdGVzdC5jb20iLCJpYXQiOjE3MTAzNDg1ODEsImV4cCI6MTcxMDQzNDk4MSwic3ViIjoiOTdkN2MzY2ItNjg3NS00Njg2LTg1MDAtMTQ5Zjg2NTdkNjNlIn0.r1FPWf747Jvk_efXqjIyfzJJp9VKzScFztPU0ZEhMpc"
}
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `400 Bad Request` | *JSON* contendo uma mensagem refrente ao erro. |
| `500 Internal Server Error` | *JSON* contendo uma mensagem refrente ao erro. |

#### Exemplo 

* `400 Bad Request`
````
{
    "error": "email is not set"
}
````

````
{
    "error": "password can't be empty"
}
````

````
{
    "error": "User or password incorrect"
}
````

* `500 Internal Server Error`
````
{
    "status": "error",
    "menssage": "Internal server error"
}
````
----
### *Obter os dados do usuário*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados de cadastro do usuário que esteja atualmente logado no sistema MosquitoZero.

#### URL
````
GET /user
````

#### Header

`Bearer Token`  
````
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU 
````

#### Exemplo

* cURL
````
curl --location 'localhost:8080/user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU' \
--data ''
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo os campos `id`, `email`, `data`, `name`, `created_at` e `updated_at`. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "data": {
        "phoneNumber": "(00) 90000-0000",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    },
    "created_at": "2024-03-13T23:05:02.431Z",
    "updated_at": "2024-03-13T23:05:02.431Z"
}
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `401 Unauthorized` | *None* |
| `500 Internal Server Error` | *JSON* contendo uma mensagem refrente ao erro. |

#### Exemplo 

* `500 Internal Server Error`
````
{
    "status": "error",
    "menssage": "Internal server error"
}
````

----
### *Atualizar os dados do usuário*

`Precisa de Autenticação`

Este endpoint permite a atualização do campo "data", que deve conter os demais dados de cadastro, e também do nome do usuário que esteja atualmente logado no sistema MosquitoZero. O email e senha não são atualizados.

#### URL
````
PATCH /user
````

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `data` | *JSON* | Obrigatório | As informações restantes do usuário. |

#### Exemplo

* Body
````
{
    "name": "User Updated"
    "data": {
        "phoneNumber": "(11) 91111-1111",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    }
}
````

* cURL
````
curl --location --request PATCH 'localhost:8080/user' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU' \
--data '{
    "name": "User Updated"
    "data": {
        "phoneNumber": "(11) 91111-1111",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    }
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo os campos `id`, `email`,`name`, `data` e `updated_at`. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
    "name": "User Updated"
    "data": {
        "phoneNumber": "(11) 91111-1111",
        "registNumber": 10000,
        "experience": 1,
        "city": "Campina Grande"
    },
    "updated_at": "2024-03-13T23:05:02.431Z"
}
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `400 Bad Request` | *JSON* contendo uma mensagem refrente ao erro. |
| `401 Unauthorized` | *None* |
| `500 Internal Server Error` | *JSON* contendo uma mensagem refrente ao erro. |

#### Exemplo 

* `400 Bad Request`
````
{
    "error": "data can't be empty"
}
````

* `500 Internal Server Error`
````
{
    "status": "error",
    "menssage": "Internal server error"
}
````