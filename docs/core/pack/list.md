
### <span style="color:green">GET</span> Liste des Packs

```plaintext
GET BASE_URL/pack/list/{branchSlug}/{insurerSlug}
```

Récupère la liste des packs en fonction des slugs de la branche et de l'assureur.

## Paramètres de la Requête

| Paramètre    | Type   | Description                    |
| ------------ | ------ | ------------------------------ |
| branchSlug   | string | Le slug de la branche.         |
| insurerSlug  | string | Le slug de l'assureur.         |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/pack/list/{branchSlug}/{insurerSlug}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "packs": [
        // Liste des packs
    ]
}
```

:::

**Remarque :** Si les paramètres `branchSlug` et `insurerSlug` sont fournis, la liste de packs sera filtrée en conséquence. Sinon, tous les packs seront renvoyés.

