### <span style="color:yellow">PUT</span> Mettre à jour la version d'apis

````
BASE_URL/service/{apiKey}/update/versions
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jour la version d'apis
Ce guide vous aide à comprendre comment mettre à jour la version d'apis.


## Informations envoyées dans la requête

Lors de la mise à jour la version d'apis, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "apis": {}
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/update/versions' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
    },
    200,
    {},
    {
        "groups": {
            "0":"order", 
            "1":"infos",
            "2":"manager"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
