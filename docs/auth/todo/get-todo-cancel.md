### <span style="color:green">GET</span> Annuler un todo

````
BASE_URL/todo/cancel/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Annulation d'un todo
Ce guide vous aide à comprendre comment annuler un todo.


## Informations envoyées dans la requête

Lors de l'annulation d'un todo, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/todo/cancel/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "todo": {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "deadline": "12/01/2022",
                "comment": "lorem ipsum dolor sit amet",
                "type": "CLOSE_QUOTE",
            }
    },
    200,
    {}
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
