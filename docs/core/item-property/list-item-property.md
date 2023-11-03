

### <span style="color:green">GET</span> Liste des Propriétés de l'Item

```plaintext
GET BASE_URL/item/property/list
```

Récupère la liste de toutes les propriétés d'item.

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/item/property/list' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "itemProperties": [
        // Liste des propriétés d'item
    ]
}
```

:::

---