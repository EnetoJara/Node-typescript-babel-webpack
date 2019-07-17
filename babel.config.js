module.exports = api => {
	
	api.cache(() => process.env.NODE_ENV);
	
	return {
		
		plugins: [
			["@babel/plugin-proposal-decorators", { legacy: true }],
			["@babel/plugin-transform-classes", {loose: true}],
			["@babel/plugin-external-helpers"],
			["@babel/plugin-transform-runtime"],
			["@babel/plugin-transform-modules-commonjs"],
			["transform-member-expression-literals"],
			["transform-property-literals"],
			["@babel/plugin-transform-reserved-words"],
			["@babel/plugin-transform-property-mutators"],
			["@babel/plugin-transform-arrow-functions"],
			["@babel/plugin-transform-block-scoped-functions"],
			[
				"@babel/plugin-transform-async-to-generator",
				{
					method: "coroutine",
					module: "bluebird",
				},
			],
			["@babel/plugin-proposal-async-generator-functions"],
			["@babel/plugin-transform-block-scoping"],
			["@babel/plugin-transform-computed-properties"],
			["@babel/plugin-transform-destructuring"],
			["@babel/plugin-transform-duplicate-keys"],
			["@babel/plugin-transform-for-of"],
			["@babel/plugin-transform-function-name"],
			["@babel/plugin-transform-literals"],
			["@babel/plugin-transform-object-super"],
			["@babel/plugin-transform-shorthand-properties"],
			["@babel/plugin-transform-spread"],
			["@babel/plugin-transform-template-literals"],
			["@babel/plugin-transform-exponentiation-operator"],
			["@babel/plugin-proposal-object-rest-spread"],
			["@babel/plugin-proposal-do-expressions"],
			["@babel/plugin-proposal-export-default-from"],
			["@babel/plugin-proposal-export-namespace-from"],
			["@babel/plugin-proposal-logical-assignment-operators"],
			["@babel/plugin-proposal-throw-expressions"],
			[
				"transform-inline-environment-variables",
				{
					include: [
						"ENETO_APP_PORT",
						"ENETO_APP_NODE_ENV",
						"ENETO_APP_BABEL_ENV",
						"ENETO_APP_DB_NAME",
						"ENETO_APP_DB_USER",
						"ENETO_APP_DB_PASSWORD",
					],
				},
			],
		],
		presets: [["@babel/preset-env",{
			targets: {
				node: "current",
				esmodules: 2
			},
			useBuiltIns: 'entry',
			corejs: 2,
		}],"@babel/preset-typescript"],
	};
};
