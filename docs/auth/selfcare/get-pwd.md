### <span style="color:green">GET</span> Mettre à jour un mot de passe

````
BASE_URL/selfcare/update/password/{password}
````

<br/> <br/> 

# Mise à jour d'un mot de passe
Ce guide vous aide à comprendre comment mettre à jour un mot de passe.


## Informations envoyées dans la requête

Lors de la mise à jour d'un mot de passe, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/update/password/{password}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "message": "Vous pouvez désormais vous connecter avec votre nouveau mot de passe", 
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
