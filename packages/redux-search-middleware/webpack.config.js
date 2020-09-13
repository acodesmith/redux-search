const path = require("path");

module.exports = {
	entry: {
		index: "./src/index.ts",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: "redux-search-middleware",
		libraryTarget: "umd",
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
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"],
	},
	plugins: [],
};
