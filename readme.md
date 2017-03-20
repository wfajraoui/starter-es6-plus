# Starter Kit for ES 6, 7, 8 Stage 0 development
Le point d'entré est index.js

## Install
`npm install`

## Execute for development
* `npm run dev`
## Build for production
* `npm run build`

## Export as a library

Add this code to the `index.js` file

```javascript 
if(PRODUCTION){
	module.exports = function () {
		return new Exemple();
	}
}
```
