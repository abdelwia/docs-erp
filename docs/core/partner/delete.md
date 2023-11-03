### <span style="color:red">DELETE</span> Supprimer un Partenaire

```plaintext
DELETE BASE_URL/partner/delete/{uuid}
```

Supprime le partenaire identifié par l'UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| uuid      | string | L'UUID du partenaire. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request DELETE 'BASE_URL/partner/delete/{uuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success"
}
```

:::

**Remarque :** La réponse indique que le partenaire a été supprimé avec succès.

