# Starter Kit pour les développements ES 6, 7, 8 Stage 0
Le point d'entré est index.js

## Installation
`npm install`

## Exécution
* `npm run dev`
* `npm run build`

## Exporter en tant que librairie

Ce code est à mettre dans le `index.js`

```javascript 
if(PRODUCTION){
	module.exports = function () {
		return new Exemple();
	}
}
```