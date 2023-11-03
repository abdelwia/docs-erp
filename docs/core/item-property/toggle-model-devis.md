

### <span style="color:green">GET</span> Basculer l'Affichage sur les Devis

```plaintext
GET BASE_URL/item/property/toggle/devis/{id}
```

Bascule l'état de l'affichage d'une propriété d'item sur les devis.

## Paramètres

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| id        | string | L'ID de la propriété.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location BASE_URL/item/property/toggle/devis/{id}' \
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
