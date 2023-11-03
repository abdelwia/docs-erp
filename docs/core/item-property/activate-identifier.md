

### <span style="color:green">GET</span> Basculer l'Identifiant de la Propriété

```plaintext
GET BASE_URL/item/property/toggle/identifier/{id}
```

Bascule l'état de l'identifiant d'une propriété d'item.

## Paramètres

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| id        | string | L'ID de la propriété.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location BASE_URL/item/property/toggle/identifier/{id}' \
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

---

