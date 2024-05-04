# API REST - MosquitoZero

Documentação da API REST do MosquitoZero, que consiste em uma plataforma web para auxiliar o trabalho dos agentes de vigilância e seus supervisores no registro, na visualização e no acompanhamento das pesquisas realizadas por esses proficionais, para identificação de focos de mosquitos transmissores de doenças.

URL_API:
````
https://54.232.252.129.nip.io
```` 

## Sumário

### User

- [Criar um usuário](#Criar-um-usuário)
- [Realizar o Login](#Realizar-o-Login)
- [Obter os dados do usuário logado](#Obter-os-dados-do-usuário)
- [Obter os dados do usuário pelo id](#Obter-os-dados-do-usuário-pelo-id)
- [Listar os usuários do tipo agente](#Listar-os-usuários-do-tipo-agente)


## Endpoints

### *Criar um usuário*

Este endpoint permite o cadastro do usuário no sistema fornecendo o e-mail, a senha, o nome, o tipo, e o "data", um objeto *JSON* que deve conter os demais dados necessários para o cadastro do usuário. Em retorno receberá um *JSON* contendo o usuário recém cadastrado no sistema do MosquitoZero.
Os tipos de usuários permitidos atualmente são apenas *agente* e *supervisor*.

#### URL
````
POST URL_API/user
````

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `email` | String | Obrigatório | O endereço de e-mail para o usuário. |
| `password` | String | Obrigatório | A senha para a conta do usuário. |
| `name` | String | Obrigatório | O nome do usuário. |
| `type` | String | Obrigatório | O tipo do usuário (*agente* ou *supervisor*). |
| `data` | *JSON* | Obrigatório | As informações restantes do usuário. |

#### Exemplo

* Body
````
{
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "type": "agente"
    "data": {
        "telefone": "(00) 90000-0000",
    }
}
````

* cURL
````
curl --location 'URL_API/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "type": "agente"
    "data": {
        "telefone": "(00) 90000-0000",
    }
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `201 CREATED` | *JSON* contendo os campos `id`, `email`, `name`, `type`, `data` e `created_at`. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "type": "agente"
    "data": {
        "telefone": "(00) 90000-0000",
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
POST URL_API/login
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
curl --location 'URL_API/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user@email.com",
    "password": "mypassword"
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` |  *JSON* contendo os campos `id`, `email`, `type` e `token` do usuário. |

#### Exemplo 
````
{
    "id": "97d7c3cb-6875-4686-8500-149f8657d63e",
    "email": "user@email.com",
    "type": "agente",
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
### *Obter os dados do usuário logado*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados de cadastro do usuário que esteja atualmente logado no sistema MosquitoZero.

#### URL
````
GET URL_API/user
````

#### Header

`Bearer Token`  
````
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU 
````

#### Exemplo

* cURL
````
curl --location 'URL_API/user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU' \
--data ''
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo os campos `id`, `email`, `data`, `name`, `type`, `created_at` e `updated_at`. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
    "password": "mypassword",
    "name": "User",
    "type": "agente",
    "data": {
        "telefone": "(00) 90000-0000",
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
### *Obter os dados do usuário pelo id*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados de cadastro do usuário pelo id do mesmo no sistema MosquitoZero.

#### URL
````
GET URL_API/user/id
````

#### Header

`Bearer Token`  
````
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDEwMzMsImV4cCI6MTcxNDkyNzQzMywic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.cwiePQHjyNVFpqWxawp453rodS5KYYfcrRJVFJeEM9s
````
`user_id`
````
85c4d096-46f2-41f7-aa6c-7fccef52ffbb
````

#### Exemplo

* cURL
````
curl --location 'localhost:8080/user/id' \
--header 'user_id: 85c4d096-46f2-41f7-aa6c-7fccef52ffbb' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDEwMzMsImV4cCI6MTcxNDkyNzQzMywic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.cwiePQHjyNVFpqWxawp453rodS5KYYfcrRJVFJeEM9s'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo os campos `id`, `email`, `data`, `name`, `type`, `created_at` e `updated_at`. |

#### Exemplo 
````
{
    "id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
    "email": "user@email.com",
    "name": "User",
    "type": "agente",
    "data": {
        "telefone": "(00) 90000-0000"
    },
    "created_at": "2024-04-23T15:25:38.458Z",
    "updated_at": "2024-04-23T15:25:38.458Z"
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
### *Listar os usuários do tipo agente*

`Precisa de Autenticação`

Este endpoint permite a listagem de todos os usuários do tipo *agente* que estejam cadastrados no do sistema MosquitoZero.

#### URL
````
GET URL_API/users
````

#### Header

`Bearer Token`  
````
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzEwMzcxNTg0LCJleHAiOjE3MTA0NTc5ODQsInN1YiI6ImM0ZTJkMDcyLTljNWEtNDFmYi04YWE0LWZlYWNiZjliNzEzNCJ9.FB2pnUBnt12cqkHw5AbdE91fv3I-e_I8saNOjy3aHaU 
````

#### Exemplo

* cURL
````
curl --location 'URL_API/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDEwMzMsImV4cCI6MTcxNDkyNzQzMywic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.cwiePQHjyNVFpqWxawp453rodS5KYYfcrRJVFJeEM9s'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo lista de usuários do tipo *agente* com os campos `id`, `name` e `email`. |

#### Exemplo 
````
[
    {
        "id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
        "email": "agente1@email.com",
        "name": "Agente1"
    },
    {
        "id": "891c9462-9b65-479b-accf-1dd211e58bbb",
        "email": "agente2@email.com",
        "name": "Agente2"
    },
    {
        "id": "e124b1df-da3a-4fa8-a0aa-3921c180e6b7",
        "email": "agente3@email.com",
        "name": "Agente3"
    }
]
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