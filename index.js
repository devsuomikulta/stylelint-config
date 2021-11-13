module.exports = {
	extends: [
		"stylelint-config-sass-guidelines"
	],

	rules: {
		"prettier/prettier": true,
		"color-hex-length": "long",
		"indentation": 4,
		"max-nesting-depth": 4,
		"order/properties-alphabetical-order": null,
		"selector-no-qualifying-type": [ true, {
			"ignore": [ "attribute" ]
		}],

		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": "numeric",
		"function-url-no-scheme-relative": true,
		"selector-attribute-quotes": "always",
		"string-quotes": "double",
	},
	plugins: [
		"stylelint-prettier",
		"stylelint-declaration-strict-value",
		"stylelint-scss",
		"stylelint-order",
	],
	customSyntax: "postcss-scss"
};
