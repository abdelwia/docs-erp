### <span style="color:green">GET</span> Liste des avenants émis entre deux dates

````
BASE_URL/avenant/emission/list/{start}/{end}/{page}
````

## Paramètres

- `{start}` : Date de début au format `YYYY-MM-DD`
- `{end}` : Date de fin au format `YYYY-MM-DD`
- `{page}` : Numéro de la page

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/avenant/emission/list/2023-11-01/2023-11-03/1' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "avenants": [
        // Liste des avenants émis
    ]
}
```

:::
