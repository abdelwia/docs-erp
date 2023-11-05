

### <span style="color:green">GET</span> Liste des Objets par Branche

```plaintext
GET BASE_URL/api/get/item/list/{slug}
```

Récupère la liste des objets par branche.

#### Paramètres de la Requête

| Paramètre | Type   | Description               |
| --------- | ------ | ------------------------- |
| slug      | string | Le slug de la branche.    |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/get/item/list/{slug}'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "items": [
        // Liste des objets par branche
    ]
}
```

:::
