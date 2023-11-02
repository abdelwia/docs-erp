### <span style="color:green">GET</span>  Local

````
BASE_URL/local/list
````
<br>

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment récupérer la liste de .

## Example de requête

```txt
curl --location 'BASE_URL/local/list'
```

## Données reçues
L'API renverra une réponse JSON contenant la liste de  :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "types": [
        {
            "id": 30,
            "name": "",
            "iso": "",
            "langage": "",
            "published": "",
            "required": "",
            "urlcode": "",
            "isTranslatable": "",
            "iso639_1": "",
            "iso639_2": "",
        },
        {
            "id": 22,
            "name": "",
            "iso": "",
            "langage": "",
            "published": "",
            "required": "",
            "urlcode": "",
            "isTranslatable": "",
            "iso639_1": "",
            "iso639_2": "",
        },
        {
            "id": 12,
            "name": "",
            "iso": "",
            "langage": "",
            "published": "",
            "required": "",
            "urlcode": "",
            "isTranslatable": "",
            "iso639_1": "",
            "iso639_2": "",
        }
    ]
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
