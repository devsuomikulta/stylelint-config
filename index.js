module.exports = {
	extends: [
		// Reasonable config for CSS and SCSS
		"stylelint-config-sass-guidelines"
	],

	rules: {
		// Rule overrides for stylelint-config-sass-guidelines
		"color-hex-length": "long",
		indentation: "tab",
		"max-nesting-depth": 4,
		"order/properties-alphabetical-order": null,
		"selector-no-qualifying-type": [ true, {
			"ignore": [ "attribute" ]
		}],

		// Additional rules
		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": "numeric",
		"function-url-no-scheme-relative": true,
		"selector-attribute-quotes": "always",
		"string-quotes": "double",
	},
	plugins: [
		"stylelint-declaration-strict-value",
		"stylelint-scss",
		"stylelint-order",
	]
};
