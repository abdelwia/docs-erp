### <span style="color:green">GET</span> Récupérer la liste de todo

````
BASE_URL/todo/list/{page}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de la liste de todo
Ce guide vous aide à comprendre comment récupérer la liste de todo.


## Informations envoyées dans la requête

Lors de la récupération de la liste de todo, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/todo/list/{page}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "todos": {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            },
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            },
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            },
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            },
    },
    200,
    {},
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
