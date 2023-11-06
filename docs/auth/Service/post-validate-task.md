### <span style="color:orange">POST</span> Valider une tache pour un sujet

````
BASE_URL/service/{apiKey}/validate/task/for/subject/{subject}
````

<br/> <br/> 

# Validation d'une tache pour un sujet
Ce guide vous aide à comprendre comment valider une tache pour un sujet.


## Informations envoyées dans la requête

Lors de la validation d'une tache pour un sujet, les informations envoyées peuvent être les suivantes :


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
curl --location 'BASE_URL/service/{apiKey}/validate/task/for/subject/{subject}' \
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
    "status": "success", // Or error
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
