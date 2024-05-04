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
- [Obter os dados do usuário logado](#Obter-os-dados-do-usuário-logado)
- [Obter os dados do usuário pelo id](#Obter-os-dados-do-usuário-pelo-id)
- [Listar os usuários do tipo agente](#Listar-os-usuários-do-tipo-agente)

### Cycle

- [Criar um ciclo](#Criar-um-ciclo)
- [Obter os dados do ciclo ativo](#Obter-os-dados-do-ciclo-ativo)
- [Obter os dados do ciclo pelo id](#Obter-os-dados-do-ciclo-pelo-id)
- [Listar os ciclos inativos](#Listar-os-ciclos-inativos)

### Visitation Area

- [Criar uma area de visita](#Criar-uma-area-de-visita)
- [Obter os dados de uma area de visita](#Obter-os-dados-do-ciclo-ativo)
- [Listar as areas de visita de um agente](#Listar-as-areas-de-visita-de-um-agente)

### Visitation

- [Criar uma visita](#Criar-um-usuário)
- [Realizar o Login](#Realizar-o-Login)
- [Obter os dados do usuário logado](#Obter-os-dados-do-usuário-logado)
- [Obter os dados do usuário pelo id](#Obter-os-dados-do-usuário-pelo-id)
- [Listar os usuários do tipo agente](#Listar-os-usuários-do-tipo-agente)
- 
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
| `201 CREATED` | *JSON* contendo o usuário criado. |

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

* `Bearer Token`  

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
| `200 OK` | *JSON* contendo o usuário logado. |

#### Exemplo 
````
{
    "id": "c4e2d072-9c5a-41fb-8aa4-feacbf9b7134",
    "email": "user@email.com",
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

* `Bearer Token`  
* `user_id`

#### Exemplo

* cURL
````
curl --location 'URL_API/user/id' \
--header 'user_id: 85c4d096-46f2-41f7-aa6c-7fccef52ffbb' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDEwMzMsImV4cCI6MTcxNDkyNzQzMywic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.cwiePQHjyNVFpqWxawp453rodS5KYYfcrRJVFJeEM9s'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo o usuário com o id fornecido. |

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

* `Bearer Token`  

#### Exemplo

* cURL
````
curl --location 'URL_API/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDEwMzMsImV4cCI6MTcxNDkyNzQzMywic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.cwiePQHjyNVFpqWxawp453rodS5KYYfcrRJVFJeEM9s'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | Lista de usuários do tipo *agente* com os campos `id`, `name` e `email`. |

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
### *Criar um ciclo*

`Precisa de Autenticação`

Este endpoint permite a criação de um novo ciclo no sistema fornecendo o "data", um objeto *JSON* que deve conter os campos "ciclo" e "ano", necessários para o cadastro do ciclo. Em retorno receberá um *JSON* contendo o ciclo recém cadastrado no sistema do MosquitoZero.

#### URL
````
POST URL_API/cycle
````

#### Header

* `Bearer Token`  

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `data` | *JSON* | Obrigatório | As informações referentes aos campos `ciclo` e `ano`. |

#### Exemplo

* Body
````
{
    "data": {
        "ciclo": "03",
        "ano": "2024"
    }
}
````

* cURL
````
curl --location 'URL_API/cycle' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDMwODQsImV4cCI6MTcxNDkyOTQ4NCwic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.29mjQ_a9BAQ6x1fjodxdoGT_Y5jA0RjN_ml05k4ebcA' \
--data '{
    "data": {
        "ciclo": "03",
        "ano": "2024"
    }
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `201 CREATED` | *JSON* contendo o ciclo criado. |

#### Exemplo 
````
{
    "id": "dcbfa753-d592-41b7-8338-513f0409c166",
    "data": {
        "ano": "2024",
        "ciclo": "03"
    },
    "is_active": true,
    "created_at": "2024-05-04T17:18:17.567Z",
    "updated_at": "2024-05-04T17:18:17.567Z"
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
    "error": "data is not set"
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
### *Obter os dados do ciclo ativo*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados do ciclo atualmente ativo no sistema MosquitoZero.

#### URL
````
GET URL_API/cycle
````

#### Header

* `Bearer Token`  

#### Exemplo

* cURL
````
curl --location 'URL_API/cycle' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDMwODQsImV4cCI6MTcxNDkyOTQ4NCwic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.29mjQ_a9BAQ6x1fjodxdoGT_Y5jA0RjN_ml05k4ebcA'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo o ciclo ativo. |

#### Exemplo 
````
{
    "id": "dcbfa753-d592-41b7-8338-513f0409c166",
    "data": {
        "ano": "2024",
        "ciclo": "03"
    },
    "is_active": true,
    "created_at": "2024-05-04T17:18:17.567Z",
    "updated_at": "2024-05-04T17:18:17.567Z"
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
### *Obter os dados do ciclo pelo id*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados do ciclo pelo id do mesmo no sistema MosquitoZero.

#### URL
````
GET URL_API/cycle/id
````

#### Header

* `Bearer Token`  
* `cycle_id`

#### Exemplo

* cURL
````
curl --location 'localhost:8080/cycle/id' \
--header 'cycle_id: b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDMwODQsImV4cCI6MTcxNDkyOTQ4NCwic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.29mjQ_a9BAQ6x1fjodxdoGT_Y5jA0RjN_ml05k4ebcA'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo o ciclo com o id fornecido. |

#### Exemplo 
````
{
    "id": "b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f",
    "data": {
        "ano": "2024",
        "ciclo": "02"
    },
    "is_active": false,
    "created_at": "2024-04-24T19:25:13.048Z",
    "updated_at": "2024-05-04T17:18:17.542Z"
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
    "error": "no cycle found"
}
````

----
### *Listar os ciclos inativos*

`Precisa de Autenticação`

Este endpoint permite a listagem de todos os ciclos que estejam inativos no do sistema MosquitoZero.

#### URL
````
GET URL_API/cycles
````

#### Header

* `Bearer Token`  

#### Exemplo

* cURL
````
curl --location 'URL_API/cycles' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NDMwODQsImV4cCI6MTcxNDkyOTQ4NCwic3ViIjoiYzA2ODcxNjMtZTQ4NS00NTYzLWI2YTYtZDQ3NDdhZjI1MjI0In0.29mjQ_a9BAQ6x1fjodxdoGT_Y5jA0RjN_ml05k4ebcA'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | Lista dos ciclos inativos. |

#### Exemplo 
````
[
    {
        "id": "b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f",
        "data": {
            "ano": "2024",
            "ciclo": "02"
        },
        "is_active": false,
        "created_at": "2024-04-24T19:25:13.048Z",
        "updated_at": "2024-05-04T17:18:17.542Z"
    },
    {
        "id": "c82c471b-cb4e-4622-8a57-8d60385504cd",
        "data": {
            "ano": "2024",
            "ciclo": "01"
        },
        "is_active": false,
        "created_at": "2024-04-24T18:07:32.618Z",
        "updated_at": "2024-04-24T19:25:13.038Z"
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
### *Criar um area de visita*

`Precisa de Autenticação`

Este endpoint permite a criação de um nova area de visita no sistema fornecendo o "data", um objeto *JSON* que deve conter as informações referentes a area de visita, necessários para o cadastro da area de visita. Em retorno receberá um *JSON* contendo a area de visita recém cadastrado no sistema do MosquitoZero. A area de visita deve ser associada a um ciclo e um usuario cadastrado no sistema.

#### URL
````
POST URL_API/visitation-area
````

#### Header

* `Bearer Token`  
* `user_id`
* `cycle_id`

#### Body

| Parâmetros | Tipo   | Requisito | Descrição  |
| ---------- | ------ | ----------- | ------------ |
| `data` | *JSON* | Obrigatório | As informações referentes a area de visita. |

#### Exemplo

* Body
````
{
    "data": {
        "tipo": "residencial",
        "zona": "urbana",
        "atividade": "LI-Levantamento de índice",
        "municipio": "Campina Grande",
        "nomeLocalidade": "Bodocongó",
        "categLocalidade": "bairro"
    }
}
````

* cURL
````
curl --location 'URL_API/visitation-area' \
--header 'user_id: 85c4d096-46f2-41f7-aa6c-7fccef52ffbb' \
--header 'cycle_id: dcbfa753-d592-41b7-8338-513f0409c166' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NjA2MTgsImV4cCI6MTcxNDk0NzAxOCwic3ViIjoiM2VmMmVlYWYtN2U2ZC00YTI2LTg5ODQtNDExZDEwYjlkZjE3In0.r_E9Z0NVjII5EE8OTGawbXx0GeIx2JmewSwSBDr44QI' \
--data '{
    "data": {
        "tipo": "residencial",
        "zona": "urbana",
        "atividade": "LI-Levantamento de índice",
        "municipio": "Campina Grande",
        "nomeLocalidade": "Bodocongó",
        "categLocalidade": "bairro"
    }
}'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `201 CREATED` | *JSON* contendo a area de visita criada. |

#### Exemplo 
````
{
    "id": "832836af-1c0d-4a2d-821f-a9e8b818b947",
    "data": {
        "tipo": "residencial",
        "zona": "urbana",
        "atividade": "LI-Levantamento de índice",
        "municipio": "Campina Grande",
        "nomeLocalidade": "Bodocongó",
        "categLocalidade": "bairro"
    },
    "num_visitations": 0,
    "completed_visitations": 0,
    "user_id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
    "cycle_id": "dcbfa753-d592-41b7-8338-513f0409c166",
    "created_at": "2024-05-04T22:11:43.425Z",
    "updated_at": "2024-05-04T22:11:43.425Z"
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
    "error": "data is not set"
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
### *Obter os dados de uma area de visita*

`Precisa de Autenticação`

Este endpoint permite a obtenção dos dados de uma area de visita pelo id da mesma no sistema MosquitoZero.

#### URL
````
GET URL_API/visitation-area
````

#### Header

* `Bearer Token` 
* `visitation_area_id`

#### Exemplo

* cURL
````
curl --location 'URL_API/visitation-area' \
--header 'visitation_area_id: 832836af-1c0d-4a2d-821f-a9e8b818b947' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NjA2MTgsImV4cCI6MTcxNDk0NzAxOCwic3ViIjoiM2VmMmVlYWYtN2U2ZC00YTI2LTg5ODQtNDExZDEwYjlkZjE3In0.r_E9Z0NVjII5EE8OTGawbXx0GeIx2JmewSwSBDr44QI'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | *JSON* contendo a area de visita com o id fornecido. |

#### Exemplo 
````
{
    "id": "832836af-1c0d-4a2d-821f-a9e8b818b947",
    "data": {
        "tipo": "residencial",
        "zona": "urbana",
        "atividade": "LI-Levantamento de índice",
        "municipio": "Campina Grande",
        "nomeLocalidade": "Bodocongó",
        "categLocalidade": "bairro"
    },
    "num_visitations": 0,
    "completed_visitations": 0,
    "user_id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
    "cycle_id": "dcbfa753-d592-41b7-8338-513f0409c166",
    "created_at": "2024-05-04T22:11:43.425Z",
    "updated_at": "2024-05-04T22:11:43.425Z"
}
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `400 Bad Request` | *JSON* contendo uma mensagem refrente ao erro. |
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
### *Listar as areas de visita de um agente*

`Precisa de Autenticação`

Este endpoint permite a listagem de todos as areas de visitas que estejam associados a um ciclo e um agente no do sistema MosquitoZero.

#### URL
````
GET URL_API/visitation-areas
````

#### Header

* `Bearer Token` 
* `user_id` 
* `cycle_id`


#### Exemplo

* cURL
````
curl --location 'URL_API/visitation-areas' \
--header 'user_id: 85c4d096-46f2-41f7-aa6c-7fccef52ffbb' \
--header 'cycle_id: b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVydmlzb3JAZW1haWwuY29tIiwidHlwZSI6InN1cGVydmlzb3IiLCJpYXQiOjE3MTQ4NjA2MTgsImV4cCI6MTcxNDk0NzAxOCwic3ViIjoiM2VmMmVlYWYtN2U2ZC00YTI2LTg5ODQtNDExZDEwYjlkZjE3In0.r_E9Z0NVjII5EE8OTGawbXx0GeIx2JmewSwSBDr44QI'
````

#### Resposta em caso de sucesso:

| Status | Resposta |
| ------ | ------------- |
| `200 OK` | Lista das areas de visitas associadas ao ciclo e agente fornecidos. |

#### Exemplo 
````
[
    {
        "id": "d9b91b20-77a6-4e32-9aae-86e650fb27ce",
        "data": {
            "tipo": "Sede",
            "zona": "Y",
            "atividade": "LI-Levantamento de índice",
            "municipio": "Campina Grande",
            "cdg_localidade": "2",
            "catg_localidade": "Area",
            "nome_localidade": "Nova Area"
        },
        "num_visitations": 2,
        "completed_visitations": 1,
        "user_id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
        "cycle_id": "b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f",
        "created_at": "2024-04-24T19:38:28.386Z",
        "updated_at": "2024-04-26T15:57:07.373Z"
    },
    {
        "id": "3d634068-19d6-4bd1-8d31-f66eb4054de2",
        "data": {
            "tipo": "Sede",
            "zona": "X",
            "atividade": "LI-Levantamento de índice",
            "municipio": "Campina Grande",
            "cdg_localidade": "1",
            "catg_localidade": "Area",
            "nome_localidade": "Nova Area "
        },
        "num_visitations": 1,
        "completed_visitations": 0,
        "user_id": "85c4d096-46f2-41f7-aa6c-7fccef52ffbb",
        "cycle_id": "b0d0f948-e5b2-4cd3-9c7c-b1efad36ed7f",
        "created_at": "2024-04-24T19:38:09.392Z",
        "updated_at": "2024-04-24T19:40:43.968Z"
    }
]
````

#### Resposta em caso de erro:

| Status | Resposta |
| ------ | ------------- |
| `400 Bad Request` | *JSON* contendo uma mensagem refrente ao erro. |
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