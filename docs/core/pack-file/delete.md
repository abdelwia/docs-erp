

### <span style="color:red">DELETE</span> Supprimer un Fichier de Pack

```plaintext
DELETE BASE_URL/pack/file/delete/{id}
```

Supprime un fichier de pack en fonction de son ID.

## Paramètres de la Requête

| Paramètre | Type   | Description            |
| --------- | ------ | ---------------------- |
| id        | string | L'ID du fichier de pack.|

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request DELETE 'BASE_URL/pack/file/delete/{id}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "Fichier Supprimé"
}
```

:::

**Remarque :** Le fichier de pack sera supprimé de la base de données.

---

