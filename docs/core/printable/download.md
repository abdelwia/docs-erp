### <span style="color:green">GET</span> Télécharger le Fichier Imprimable

```plaintext
GET BASE_URL/item/printable/download/{itemUuid}
```

Télécharge le fichier imprimable associé à un élément donné.

## Paramètres de la Requête

| Paramètre | Type   | Description           |
| --------- | ------ | --------------------- |
| itemUuid  | string | L'UUID de l'élément.  |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/item/printable/download/{itemUuid}'
```

## Exemple de Réponse

Un fichier imprimable sera téléchargé.

**Remarque :** Cette route renvoie un fichier imprimable au lieu d'une réponse JSON.
