

### <span style="color:red">DELETE</span> Supprimer la Propriété de l'Item

```plaintext
DELETE BASE_URL/item/property/delete/{uuid}
```

Supprime une propriété d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| uuid      | string | L'UUID de la propriété. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request DELETE 'BASE_URL/item/property/delete/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success"
}
```

:::

**Remarque :** Cette opération requiert l'autorisation d'un administrateur.
