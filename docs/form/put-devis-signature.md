### <span style="color:yellow">PUT</span> Mettre à jour la signature d'un devis

````
BASE_URL/api/save/signature/{uuid}
````

<br/> <br/> 

# Mise à jour de la signature d'un devis
Ce guide vous aide à comprendre comment mettre à jour la signature d'un devis.


## Informations envoyées dans la requête

Lors de la mise à jour de la signature d'un devis, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "files": "string"
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/save/signature/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success"
    },
    200,
    {}
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
