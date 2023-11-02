### <span style="color:yellow">PUT</span> Mettre à jour un devis

````
BASE_URL/api/subscribe/to/order/check
````

<br/> <br/> 

# Mise à jour de cotation
Ce guide vous aide à comprendre comment mettre à jour un devis.


## Informations envoyées dans la requête

Lors de la mise à jour de la cotation, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "uuid": "string",
    "fcm": "string"
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/subscribe/to/order/check' \'

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
            "0":"order", 
            "1":"infos",
            "2": "slug"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
