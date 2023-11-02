### <span style="color:orange">POST</span> Créer un devis pour un contrat externe

````
BASE_URL/api/make/external/order/{uuid}
````

<br/> <br/> 

# Création d'un devis pour un contrat externe
Ce guide vous aide à comprendre comment créer un devis pour un contrat externe.


## Informations envoyées dans la requête

Lors de la création d'un devis pour un contrat externe, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/make/external/order/{uuid}' \'

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
