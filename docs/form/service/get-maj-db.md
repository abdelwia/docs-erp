### <span style="color:green">GET</span> Mettre à jour la base de données

````
BASE_URL/service/{apiKey}/update/schema
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jour la base de données
Ce guide vous aide à comprendre comment mettre à jour la base de données.


## Informations envoyées dans la requête

Lors de la mise à jour de la base de données, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/update/schema' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "updated": {},
        "errors": {}
    },
    200,
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
