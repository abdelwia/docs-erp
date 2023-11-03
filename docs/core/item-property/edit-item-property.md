


### <span style="color:orange">POST</span> Éditer la Propriété de l'Item

```plaintext
POST BASE_URL/item/property/edit
```

Édite une propriété d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| property  | object | Les détails de la propriété à éditer. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "property": {
        // Les détails de la propriété à éditer
    }
}
```

## Exemple de Requête

```txt
txt --location --request POST 'BASE_URL/item/property/edit' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "property": {
        // Les détails de la propriété à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "La propriété a été modifiée",
    "property": {
        // Détails de la propriété modifiée
    }
}
```

:::

---

N'hésite pas à me fournir d'autres fonctions ou à me demander d'autres ajustements si nécessaire.