### <span style="color:orange">POST</span> Sauvegarder les traductions inconnues

````
BASE_URL/shared/save/unknow/translations
````

## Description

Cette route permet de sauvegarder les traductions inconnues.

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |
| Content-Type  | application/json |

### Corps de la Requête

```json
{
    "codes": ["code1", "code2", "code3"],
    "source": "source",
    "subFolder": "subFolder"
}
```

| Paramètre   | Type   | Description                                      |
| ----------- | ------ | ------------------------------------------------ |
| `codes`     | array  | Tableau contenant les codes des traductions.     |
| `source`    | string | La source des traductions.                      |
| `subFolder` | string | Le sous-dossier des traductions.                |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/shared/save/unknow/translations' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "codes": ["code1", "code2", "code3"],
    "source": "source",
    "subFolder": "subFolder"
}'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "codes": ["code1", "code2", "code3"]
}
```

:::