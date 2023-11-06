
### <span style="color:green">GET</span> Télécharger la version PDF d'un devis d'avenant

````
BASE_URL/avenant/generate/devis/{uuid}/{replace}
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Exemple de Requête

```curl
curl --location BASE_URL/avenant/generate/devis/{uuid}/{replace}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

Un fichier PDF sera téléchargé.
