
### <span style="color:green">GET</span> Liste des Propriétés du Type d'Item

```plaintext
GET BASE_URL/item/type/property/list/{className}
```

Récupère la liste des propriétés du type d'item spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| className | string | Le nom de la classe du type d'item. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/item/type/property/list/{className}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "properties": [
        // Liste des propriétés du type d'item
    ]
}
```

:::
