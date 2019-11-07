# STRAGRAM OFF

Micro-servicios de restricción de contenido para el proyecto del laboratorio de Análisis y diseño 2, GeekStragram

## [POST] /api/analyze-words

Servicio para analizar palabras que pueden ser ofensivas. Ejemplo de una entrada para consumir el servicio:

```json
{
  "words": ["hola", "imagen"]
}
```

Si no ha ocurrido algun error, el servicio devuelve código http 200 y la siguiente salida:

```json
{
  "message": "Analyze of words",
  "analyze": [
    {
      "word": "hola",
      "isBadWord": false
    },
    {
      "word": "imagen",
      "isBadWord": false
    }
  ]
}
```

## [POST] /api/analyze-image

Servicio para analizar imagen que pueden tener contenido no seguro. Ejemplo de una entrada para consumir el servicio:

```json
{
  "image": "64-bit base string"
}
```

Si no ha ocurrido algun error, el servicio devuelve código http 200 y devuelve una salida como la siguiente:

```json
{
  "message": "Analyze of an image",
  "ModerationLabels": [
    {
      "Confidence": 96.31548309326172,
      "Name": "Violence",
      "ParentName": ""
    },
    {
      "Confidence": 96.31548309326172,
      "Name": "Weapon Violence",
      "ParentName": "Violence"
    }
  ]
}
```

## ERROR

En caso de error en algun servcio devuelve error http 500 y el siguiente mensaje:

```json
{
  "message": "Internal Server error"
}
```
