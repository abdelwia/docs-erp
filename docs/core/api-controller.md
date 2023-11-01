### <span style="color:green">GET</span>  Type de Données

````
BASE_URL/data/type/edit
````
<br>

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment récupérer la liste de type de données.

## Example de requête

```txt
curl --location 'BASE_URL/api/get/data/types'
```

## Données reçues
L'API renverra une réponse JSON contenant la liste de type de données :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "types": [
        {
            "id": 30,
            "label": "Assureur",
            "code": "CHECKBOX",
            "class": "Insurer",
            "format": "TEXT"
        },
        {
            "id": 22,
            "label": "Calcul",
            "code": "CALLABLE",
            "class": "",
            "format": "NUMBER"
        },
        {
            "id": 12,
            "label": "Cat\u00e9gorie de Pack",
            "code": "PACK_CATEGORY",
            "class": "PackCategory",
            "format": "CLASS"
        }
    ]
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
