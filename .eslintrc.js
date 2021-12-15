module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 13,
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent":[
			"warn",
			"tab"
		],
		"semi": [
			"error",
			"never"
		],
		"no-unused-vars":1,
		"quotes": [1, "double"],
		"@typescript-eslint/no-explicit-any": ["off"]
	},
	"globals": {
		"window": true
	}
}
