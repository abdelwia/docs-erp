### <span style="color:yellow">PUT</span> Activer/Désactiver le Pack

```plaintext
PUT BASE_URL/pack/toggle/activation/{uuid}
```

Active ou désactive le pack spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'UUID du pack à modifier. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/pack/toggle/activation/{uuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "state": true
}
```

:::

**Remarque :** Le champ `"state"` indique l'état actuel du pack (activé ou désactivé).
