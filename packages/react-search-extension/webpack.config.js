const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		background: "./src/background.js",
		content: "./src/content.js",
		devtools: "./src/devtools.js",
		pagewrap: "./src/pagewrap.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "../react-search-common/assets/", to: "assets" },
				{ from: "./src/manifest.json", to: "" },
				{ from: "./static/", to: "" },
			],
		}),
	],
};
