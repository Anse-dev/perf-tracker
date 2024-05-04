# Performance Tracker

La bibliothèque Performance Tracker permet de suivre le temps d'exécution et la consommation mémoire des fonctions synchrones et asynchrones en JavaScript.

## Installation

Pour installer Performance Tracker, vous pouvez utiliser npm :

```bash
npm install performance-tracker
```

## Utilisation

Pour utiliser Performance Tracker dans votre projet Node.js, vous pouvez l'importer comme ceci :

```javascript
const trackPerformance = require('performance-tracker');
// Importez la bibliothèque
const trackPerformance = require('performance-tracker');

// Définissez votre fonction à mesurer
function myFunction() {
	// Code à mesurer
}

// Enveloppez votre fonction avec trackPerformance
const trackedFunction = trackPerformance(myFunction);

// Appelez votre fonction enveloppée
trackedFunction();
```

## Exemples

Fonction synchrone :

```javascript
const trackPerformance = require('performance-tracker');

function mySyncFunction() {
	// Code synchrone à mesurer
}

const trackedSyncFunction = trackPerformance(mySyncFunction);

trackedSyncFunction();
```

Fonction asynchrone:

```javascript
const trackPerformance = require('performance-tracker');

async function myAsyncFunction() {
	// Code asynchrone à mesurer
}

const trackedAsyncFunction = trackPerformance(myAsyncFunction);

await trackedAsyncFunction();
```

## Configuration

Performance Tracker ne nécessite aucune configuration particulière. Cependant, vous pouvez personnaliser la précision de l'affichage du temps d'exécution en modifiant le code source de la bibliothèque si nécessaire.

## Licence

Performance Tracker est distribué sous la licence MIT. Consultez le fichier LICENSE pour plus de détails.
