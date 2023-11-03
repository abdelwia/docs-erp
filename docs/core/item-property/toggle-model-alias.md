

### <span style="color:green">GET</span> Basculer l'Alias de la Propriété

```plaintext
GET BASE_URL/item/property/toggle/alias/{id}
```

Bascule l'état de l'alias d'une propriété d'item.

## Paramètres

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| id        | string | L'ID de la propriété.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location BASE_URL/item/property/toggle/alias/{id}' \
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
