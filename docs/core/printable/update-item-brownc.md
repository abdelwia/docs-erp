### <span style="color:orange">POST</span> Mettre à Jour la Carte Brune de l'Élément

```plaintext
POST BASE_URL/item/printable/update/browncard/{itemUuid}/{property}/{value}
```

Met à jour la carte brune associée à un élément donné.

## Paramètres de la Requête

| Paramètre | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| itemUuid  | string | L'UUID de l'élément.                      |
| property  | string | Le code de la propriété à mettre à jour.  |
| value     | string | Le numéro de la carte brune à associer.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/item/printable/update/browncard/{itemUuid}/{property}/{value}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "item": "{nom de l'objet} {UUID de l'élément}",
    "id": "{identifiant de la propriété mise à jour}",
    "property": "{code de la propriété mise à jour}",
    "value": "{nouveau numéro de la carte brune}"
}
```

:::

**Remarque :** Cette route effectue plusieurs vérifications pour s'assurer que la mise à jour de la carte brune est conforme aux règles spécifiées.

