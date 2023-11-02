### <span style="color:yellow">PUT</span> Mise à jour d'un devis

````
BASE_URL/api/update/forms/data/{platformSlug}
````

<br/> <br/> 

# Mise à jour de devis
Ce guide vous aide à comprendre comment mise à jour d'un devis.


## Informations envoyées dans la requête

Lors de la mise à jour d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/forms/data/{platformSlug}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "surveys": {},
        "importSurvey": {},
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
