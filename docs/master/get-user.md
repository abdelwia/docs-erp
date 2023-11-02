### <span style="color:green">GET</span>  Utilisateur

````
BASE_URL/user/list
````
<br>

# Récupération de la liste des utilisateurs
Ce guide vous aide à comprendre comment récupérer la liste des utilisateur.

## Exemple de requête

```txt
curl --location 'BASE_URL/user/list'
```

## Données reçues
L'API renverra une réponse JSON contenant la liste des utilisateurs :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "users": [
        {
            "id": 0,
            "email": "",
            "roles": "",
        },
        {
            "id": 1,
            "email": "",
            "roles": "",
        },
        {
            "id": 2,
            "email": "",
            "roles": "",
        }
    ]
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
