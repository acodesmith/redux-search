const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		background: "./src/background.js",
		content: "./src/content.js",
		devpanel: "./src/devpanel.js",
		devtools: "./src/devtools.js",
		pagewrap: "./src/pagewrap.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	devtool: false,
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"],
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
