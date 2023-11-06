### <span style="color:yellow">PUT</span> Mettre à jour un reponse group

````
BASE_URL/response/group/set/partner/{uuid}/{code}
````

<br/> <br/> 

# Mettre à jour un reponse group
Ce guide vous aide à comprendre comment créer d'un reponse group.


## Informations envoyées dans la requête

Lors de la mise à jour d'un reponse group, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/response/group/set/partner/{uuid}/{code}' \'

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
            "0":"manager", 
            "1":"infos",
            "2": "userManager",
            "3": "photo",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
