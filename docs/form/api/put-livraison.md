### <span style="color:yellow">PUT</span> Mettre à jour status Livraison

````
BASE_URL/api/update/order/{property}/{uuid}
````

<br/> <br/> 

# Mise à jour de status Livraison
Ce guide vous aide à comprendre comment mettre à jour de status Livraison.


## Informations envoyées dans la requête

Lors de la mise à jour de status Livraison, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "value": "string"
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/order/{property}/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success"
    },
    200,
    {},
    {
        "groups": {
       "0": "order","1": "infos","2": "slug"
       }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
