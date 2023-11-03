### <span style="color:green">GET</span> Aperçu de l'Impression

```plaintext
GET BASE_URL/item/printable/preview/{itemUuid}/{printableUuid}
```

Affiche un aperçu de l'impression pour un élément donné.

## Paramètres de la Requête

| Paramètre     | Type   | Description                        |
| ------------- | ------ | ---------------------------------- |
| itemUuid      | string | L'UUID de l'élément.               |
| printableUuid | string | L'UUID de l'imprimable.             |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/item/printable/preview/{itemUuid}/{printableUuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    // Contenu de l'aperçu de l'impression
}
```

:::

**Remarque :** Cette route est accessible uniquement pour les utilisateurs ayant le rôle "PARTNER".
