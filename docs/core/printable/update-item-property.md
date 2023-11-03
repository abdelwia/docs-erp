### <span style="color:orange">POST</span> Mettre à Jour la Propriété de l'Élément

```plaintext
POST BASE_URL/item/printable/update/item/property/{itemUuid}/{property}/{value}
```

Met à jour la propriété d'un élément donné.

## Paramètres de la Requête

| Paramètre | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| itemUuid  | string | L'UUID de l'élément.                      |
| property  | string | Le code de la propriété à mettre à jour.  |
| value     | string | La nouvelle valeur de la propriété.       |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/item/printable/update/item/property/{itemUuid}/{property}/{value}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "item": "{nom de l'objet} {UUID de l'élément}",
    "id": "{identifiant de la propriété mise à jour}",
    "property": "{code de la propriété mise à jour}",
    "value": "{nouvelle valeur de la propriété}"
}
```

:::

**Remarque :** Cette route nécessite les autorisations nécessaires pour les managers ou les administrateurs selon la zone spécifiée.
