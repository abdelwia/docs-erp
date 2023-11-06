### <span style="color:yellow">PUT</span> Mettre à jour une section

````
BASE_URL/section/update/position
````

<br/> <br/> 

# Mettre à jour une section
Ce guide vous aide à comprendre comment créer d'une section.


## Informations envoyées dans la requête

Lors de la mise à jour d'une section, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "section": "string",
    "step": "string",
    "index": "string",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/sec/upd/position' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "section": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManager",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
