### <span style="color:orange">POST</span> Créer une tache

````
BASE_URL/service/{apiKey}/create/task
````

<br/> <br/> 

# Création d'une tache
Ce guide vous aide à comprendre comment créer une tache.


## Informations envoyées dans la requête

Lors de la création d'une tache, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "task": {
        "label": "titre",
        "type": "text",
        "deadline": "01/10/2021",
        "url": "http://localhost:exemple.com",
        "subject": "text",
        "data": "text",
    }
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/service/{apiKey}/create/task' \
--data '{
    "task": {
        "label": "titre",
        "type": "text",
        "deadline": "01/10/2021",
        "url": "http://localhost:exemple.com",
        "subject": "text",
        "data": "text",
    }
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "todo": {
            "label": "titre",
            "type": "text",
            "deadline": "01/10/2021",
            "url": "http://localhost:exemple.com",
            "subject": "text",
            "data": "text",
        }
    },
    200,
    {},
    {
        "groups": {
            "0":"todo", 
            "1":"infos", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
