
### <span style="color:yellow">PUT</span> Mettre à Jour la Valeur d'une Propriété

```plaintext
PUT BASE_URL/update/property/value/{itemId}/{propertyId}/{value}
```

Met à jour la valeur d'une propriété pour un article donné.

## Paramètres de la Requête

| Paramètre  | Type   | Description                             |
| ---------- | ------ | --------------------------------------- |
| itemId     | string | L'ID de l'article associé à la propriété. |
| propertyId | string | L'ID de la propriété à mettre à jour.     |
| value      | float  | La nouvelle valeur de la propriété.      |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/update/property/value/{itemId}/{propertyId}/{value}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success"
}
```

:::

**Remarque :** La réponse indique que la valeur de la propriété a été mise à jour avec succès.

