### <span style="color:green">GET</span> Génération PDF d'un devis

````
BASE_URL/api/generate/order/{uuid}
````

<br/> <br/> 

# Génération du PDF d'un devis
Ce guide vous aide à comprendre comment générer le pdf d'un devis.


## Informations envoyées dans la requête

Lors de la génération du pdf d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/generate/order/{uuid}' \'

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
            "2":"slug"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
