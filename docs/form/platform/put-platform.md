### <span style="color:yellow">PUT</span> Mettre à jour une plateforme

````
BASE_URL/platform/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Mise à jour d'une plateforme
Ce guide vous aide à comprendre comment mettre à jour une plateforme.


## Informations envoyées dans la requête

Lors de la mise à jour de la plateforme, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "platform": {}
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/platform/edit' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "platform": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"response-group", 
            "1":"infos",
            "2": "response"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
