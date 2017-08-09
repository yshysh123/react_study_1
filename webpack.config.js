const path = require('path')
module.exports = {
	entry:{
		app:'./app.js'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'build')
	},
	module:{
		rule:[
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['env','react']
					}
				}
			}
		]
	}
}
