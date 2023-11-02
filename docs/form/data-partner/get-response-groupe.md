### <span style="color:orange">POST</span> Récupérer une liste de Response Groupe de partner

````
BASE_URL/data/dashboard
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération d'une liste de Response Groupe de partner
Ce guide vous aide à comprendre comment récupérer une liste de Response Groupe de partner.


## Informations envoyées dans la requête

Lors de la récupération d'une liste de Response Groupe de partner, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "search": {
        "start": "string",
        "end": "string",
    }
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/data/dashboard' \'

```


## Exemple de Réponse

::: details Corps  

```json

{
    "status": "success",
    "rgs": []
}

```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
