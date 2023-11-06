### <span style="color:green">GET</span> Mettre à jour le code du partenaire

````
BASE_URL/service/{apiKey}/update/partner/code/{old}/{new}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jou du code du partenaire
Ce guide vous aide à comprendre comment mettre à jour le code du partenaire.


## Informations envoyées dans la requête

Lors de la mise à jour du code du partenaire, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/update/partner/code/{old}/{new}' \'

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
