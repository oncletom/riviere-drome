# `riviere-drome`

Visualisation de la rivière Drôme en tant qu'écosystème — intrants (affluents, pollutions), extrants (puits, forages) et zones protégées (les Ramières).

# Sources de données

## Tracé de la rivière

:book: [La Drôme V42-0400](http://services.sandre.eaufrance.fr/geo/eth_FXX?SERVICE=WFS&REQUEST=getFeature&VERSION=1.1.0&srsName=epsg%3A4326&TYPENAME=CoursEau&FILTER=%3CFilter%3E%3CPropertyIsEqualTo%3E%3CPropertyName%3ECdEntiteHydrographique%3C/PropertyName%3E%3CLiteral%3EV42-0400%3C/Literal%3E%3C/PropertyIsEqualTo%3E%3C/Filter%3E&outputFormat=application/json%3B%20subtype%3Dgeojson) (via [Sandre](www.sandre.eaufrance.fr/geo/CoursEau/V42-0400))

- [Liste des affluents](https://api.sandre.eaufrance.fr/coursdeau/v1/amont/V42-0400)
- [Liste des communes traversées](https://api.sandre.eaufrance.fr/coursdeau/v1/cdcommunes/V42-0400)


## Élévation des points

:book: [Service de calcul altimétrique (Géoportail)](https://geoservices.ign.fr/documentation/geoservices/alti.html)

## Points d'intérêts

- [Forages](http://atom.geo-ide.developpement-durable.gouv.fr/atomArchive/GetResource?id=a8523472-743a-4c25-b5a8-38aec4a70ba9&dataType=dataset) (via [Cartelie/BD Carthage](http://cartelie.application.developpement-durable.gouv.fr/cartelie/voir.do?carte=Prelevements_irrigation&service=DDT_26))
- [Zones vulnérables aux nitrates](http://atom.geo-ide.developpement-durable.gouv.fr/atomArchive/GetResource?id=fr-120066022-orphan-9eecfc13-5e7c-47cf-8a1e-f577df75f16e&dataType=datasetAggregate)
