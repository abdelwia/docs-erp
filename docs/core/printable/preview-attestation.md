

### <span style="color:green">GET</span> Aperçu de l'e-Attestation

```plaintext
GET BASE_URL/item/printable/eattestation/preview/{itemUuid}
```

Affiche un aperçu de l'e-Attestation pour un élément donné.

## Paramètres de la Requête

| Paramètre | Type   | Description           |
| --------- | ------ | --------------------- |
| itemUuid  | string | L'UUID de l'élément.  |

## En-têtes

| Autorisation | Jeton Bearer |
| -------------| ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/item/printable/eattestation/preview/{itemUuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    // Contenu de l'aperçu de l'e-Attestation
}
```

:::

**Remarque :** Cette route est accessible uniquement pour les utilisateurs ayant le rôle "PARTNER".

