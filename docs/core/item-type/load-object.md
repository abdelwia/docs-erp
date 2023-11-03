
### <span style="color:green">GET</span> Charger les Objets

```plaintext
GET BASE_URL/item/type/load/objects/{slug}
```

Charge les objets en fonction du slug spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description          |
| --------- | ------ | -------------------- |
| slug      | string | Le slug de la branche. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/item/type/load/objects/{slug}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "code": "<code>"
}
```

:::

