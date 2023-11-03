

### <span style="color:green">GET</span> Basculer la Nécessité de la Propriété

```plaintext
GET BASE_URL/item/property/toggle/required/{id}
```

Bascule l'état de la nécessité d'une propriété d'item.

## Paramètres

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| id        | string | L'ID de la propriété.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location BASE_URL/item/property/toggle/required/{id}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "property": {
        // Détails de la propriété
    }
}
```

:::

