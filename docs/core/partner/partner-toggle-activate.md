### <span style="color:yellow">PUT</span> Activer/Désactiver le Partenaire

```plaintext
PUT BASE_URL/partner/toggle/activation/{id}
```

Active ou désactive le partenaire en fonction de son ID.

## Paramètres de la Requête

| Paramètre | Type   | Description      |
| --------- | ------ | ---------------- |
| id        | string | L'ID du partenaire. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/partner/toggle/activation/{id}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "state": true // ou false selon l'état du partenaire
}
```

:::

**Remarque :** L'état du partenaire (actif ou non actif) sera renvoyé dans la réponse.
