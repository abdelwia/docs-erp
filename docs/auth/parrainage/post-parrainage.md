### <span style="color:orange">POST</span> Récupérer tous les parrainages

````
BASE_URL/parrainage/list
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération de tous les parrainages
Ce guide vous aide à comprendre comment récupérer tous les parrainages.


## Informations envoyées dans la requête

Lors de la récupération de tous les parrainages, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "user": 20,
    "branch": "master",
    "contains": "information",
    "after": "01/12/2020",
    "before": "10/12/2020",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/parrainage/list' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "parrainages": {},
        "total": 20,
        "matchcount": 10
    },
    200,
    {},
    {
        "groups": {
            "0":"parrainage", 
            "1":"infos",
            "2": "photo"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
