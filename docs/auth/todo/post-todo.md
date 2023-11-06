### <span style="color:orange">POST</span> Créer/Modifier un todo

````
BASE_URL/todo/create
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un todo
Ce guide vous aide à comprendre comment créer ou modifier un todo.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un todo, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "text",
    "deadline": "12/01/2022",
    "comment": "lorem ipsum dolor sit amet",
    "type": "CLOSE_QUOTE",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/todo/create' \
--data '{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "text",
    "deadline": "12/01/2022",
    "comment": "lorem ipsum dolor sit amet",
    "type": "CLOSE_QUOTE",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "todo": {
        "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
        "label": "text",
        "deadline": "12/01/2022",
        "comment": "lorem ipsum dolor sit amet",
        "type": "CLOSE_QUOTE",
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
