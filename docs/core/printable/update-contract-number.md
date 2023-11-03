### <span style="color:orange">POST</span> Mettre à Jour le Numéro de Police du Contrat

```plaintext
POST BASE_URL/item/printable/update/contract/policy/number/{uuid}/{number}
```

Met à jour le numéro de police d'un contrat donné.

## Paramètres de la Requête

| Paramètre | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| uuid      | string | L'UUID du contrat.               |
| number    | string | Le nouveau numéro de police.      |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/item/printable/update/contract/policy/number/{uuid}/{number}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "policy": "{nouveau numéro de police}"
}
```

:::

**Remarque :** Cette route nécessite les autorisations nécessaires pour les managers ou les administrateurs selon la zone spécifiée.

