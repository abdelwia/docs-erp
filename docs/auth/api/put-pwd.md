### <span style="color:green">GET</span> Mettre à jour un mot de passe

````
BASE_URL/api/update/password
````

<br/> <br/> 

# Mettre à jour un mot de passe
Ce guide vous aide à comprendre comment mettre à jour un mot de passe.


## Informations envoyées dans la requête

Lors de la mise à jour d'un mot de passe, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "user": {
        "email": "user@example.com",
        "passwordChangeCode": "ué@qgf$ùhze",
    }
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/password' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "updated": true/false,
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
