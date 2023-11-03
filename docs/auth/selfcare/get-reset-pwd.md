### <span style="color:green">GET</span> Réinitialiser un mot de passe

````
BASE_URL/selfcare/reset/password/{phone}
````

<br/> <br/> 

# Réinitialition un mot de passe
Ce guide vous aide à comprendre comment réinitialiser un mot de passe.


## Informations envoyées dans la requête

Lors de la réinitialition d'un mot de passe, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/reset/password/{phone}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "message": "Un SMS vous sera envoyé", // Ou "Compte inactif" Ou "Compte Inconnu"
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
