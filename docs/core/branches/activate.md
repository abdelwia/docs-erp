### <span style="color:yellow">PUT</span> Activer/Désactiver une branche

````
BASE_URL/branch/toggle/activation/{uuid}
````

## Paramètres

- `{uuid}` : UUID de la branche

## Méthode

- `PUT`

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/branch/toggle/activation/UUID' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "branch": {
        // Informations de la branche mise à jour
    }
}
```

:::
















