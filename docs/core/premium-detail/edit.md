### <span style="color:orange">POST</span> Modifier un Modèle de Détail Premium

```plaintext
POST BASE_URL/premium/detail/model/edit/{branchSlug}
```

Modifie un modèle de détail premium pour une succursale donnée.

## Paramètres de la Requête

| Paramètre         | Type   | Description                              |
| ----------------- | ------ | ---------------------------------------- |
| branchSlug        | string | Le slug de la succursale.                |
| premiumDetailModel| object | Les détails du modèle de détail premium. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "premiumDetailModel": {
        // Les détails du modèle de détail premium à éditer
    }
}
```

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/premium/detail/model/edit/{branchSlug}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "premiumDetailModel": {
        // Les détails du modèle de détail premium à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success"
}
```

:::

