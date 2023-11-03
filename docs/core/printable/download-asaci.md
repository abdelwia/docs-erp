### <span style="color:green">GET</span> Télécharger le document dans le format Asaci

```plaintext
GET BASE_URL/item/printable/download/asaci/format/{itemUuid}
```

Télécharge le format Asaci associé à un élément donné.

## Paramètres de la Requête

| Paramètre | Type   | Description            |
| --------- | ------ | ---------------------- |
| itemUuid  | string | L'UUID de l'élément.   |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/item/printable/download/asaci/format/{itemUuid}'
```

## Exemple de Réponse

Un fichier au format `.xlsx` sera téléchargé.

**Remarque :** Cette route génère un fichier Asaci au format Excel avant de le télécharger.

---

N'hésitez pas à me fournir d'autres fonctions ou à me demander d'autres ajustements si nécessaire.