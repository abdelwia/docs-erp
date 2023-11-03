### <span style="color:red">DELETE</span> Supprimer le Type d'Item

```plaintext
DELETE BASE_URL/item/type/delete/{uuid}
```

Supprime un type d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description             |
| --------- | ------ | ----------------------- |
| uuid      | string | L'UUID du type d'item. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request DELETE 'BASE_URL/item/type/delete/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "uuid": "{uuid}"
}
```

:::