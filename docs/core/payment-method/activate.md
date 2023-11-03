### <span style="color:yellow">PUT</span> Activer/Désactiver la Méthode de Paiement

```plaintext
PUT BASE_URL/toggle/{slug}
```

Active ou désactive la méthode de paiement identifiée par le slug.

## Paramètres de la Requête

| Paramètre | Type   | Description               |
| --------- | ------ | ------------------------- |
| slug      | string | Le slug de la méthode.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/toggle/{slug}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "method": {
        // Nouvelles données de la méthode
    }
}
```

:::

**Remarque :** La réponse indique que la méthode de paiement a été activée ou désactivée avec succès.

