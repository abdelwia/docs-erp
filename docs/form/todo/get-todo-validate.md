### <span style="color:green">GET</span> Valider un todo

````
BASE_URL/todo/validate/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Validation d'un todo
Ce guide vous aide à comprendre comment valider un todo.


## Informations envoyées dans la requête

Lors de la validation d'un todo, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/todo/validate/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "todo": {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            }
    },
    200,
    {},
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
