### <span style="color:yellow">PUT</span> Modifier un Pack

```plaintext
PUT BASE_URL/pack/edit/{insurerSlug}
```

Modifie un pack pour un assureur spécifié.

## Paramètres de la Requête

| Paramètre    | Type   | Description                    |
| ------------ | ------ | ------------------------------ |
| insurerSlug  | string | Le slug de l'assureur.         |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "pack": {
        // Les détails du pack à éditer
    }
}
```

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/pack/edit/{insurerSlug}' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pack": {
        // Les détails du pack à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "pack": {
        // Détails du pack modifié
    }
}
```

:::

**Remarque :** Le champ `insurerSlug` est utilisé pour identifier l'assureur lié au pack.
