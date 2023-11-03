
### <span style="color:red">DELETE</span> Supprimer le Choix de Propriété

```plaintext
DELETE BASE_URL/item/property/delete/choice/{id}
```

Supprime un choix de propriété.

## Paramètres de la Requête

| Paramètre | Type   | Description            |
| --------- | ------ | ---------------------- |
| id        | string | L'ID du choix de propriété. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```plaintext
txt --location --request DELETE 'BASE_URL/item/property/delete/choice/{id}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "Choix supprimé"
}
```

:::

