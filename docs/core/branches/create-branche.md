Voici la documentation pour la fonction `branchEdit` du contrôleur `BranchController` :

### <span style="color:orange">POST</span> Creer / Modifier une branche

````
BASE_URL/branch/edit
````

## Méthode

- `POST`

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |
| Content-Type | application/json |

## Corps de la Requête

```json
{
    "branch": {
        // Nouvelles informations de la branche
    }
}
```

## Exemple de Requête

```curl
curl --location BASE_URL/branch/edit' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "branch": {
        // Nouvelles informations de la branche
    }
}'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "branch": {
        // Informations de la branche modifiées
    }
}
```

:::

Cette fonction permet de modifier les informations d'une branche.