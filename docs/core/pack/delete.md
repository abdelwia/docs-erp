D'accord, voici la documentation pour la fonction que tu as partagée :

---

### <span style="color:red">DELETE</span> Supprimer un Pack

```plaintext
DELETE BASE_URL/pack/delete/{id}
```

Supprime un pack en fonction de son ID.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| id        | string | L'ID du pack.       |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request DELETE 'BASE_URL/pack/delete/{id}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "Pack Supprimé"
}
```

:::

**Remarque :** Le pack sera supprimé de la base de données.

---

N'hésite pas à me fournir d'autres fonctions ou à me demander d'autres ajustements si nécessaire.