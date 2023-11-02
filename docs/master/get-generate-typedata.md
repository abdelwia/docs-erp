### <span style="color:green">GET</span>  Type de Données

````
BASE_URL/data/type/generate
````
<br>

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment générer la liste de type de données.

## Example de requête

```txt
curl --location 'BASE_URL/data/type/generate'
```

## Données reçues
L'API renverra une réponse JSON contenant la liste de type de données générée :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "types": [
        {
            "id": 1,
            "label": "Texte",
            "code": "TEXT",
            "class": "",
            "format": "TEXT"
        },
        {
            "id": 2,
            "label": "Num\u00e9rique",
            "code": "NUMBER",
            "class": "",
            "format": "NUMBER"
        },
        {
            "id": 3,
            "label": "Oui\/Non",
            "code": "BOOLEAN",
            "class": "",
            "format": "BOOLEAN"
        },
        {
            "id": 4,
            "label": "Montant",
            "code": "AMOUNT",
            "class": "",
            "format": "NUMBER"
        }
    ]
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
