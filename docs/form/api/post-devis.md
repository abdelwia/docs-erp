### <span style="color:orange">POST</span> Créer un devis

````
BASE_URL/api/make/order/{uuid}
````

<br/> <br/> 

# Création d'un devis
Ce guide vous aide à comprendre comment créer un devis.


## Informations envoyées dans la requête

Lors de la création d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/make/order/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "order": {}
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
