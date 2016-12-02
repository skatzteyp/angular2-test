var gulp = require('gulp');

module.exports = {
	"port": 8000,
	"files": [
		"public/**/*.{html,htm,css,js}",
		{
			match : [ "app/**/*.html" ],
			fn : function(e, file) {
				return gulp.src(file).pipe(gulp.dest('public'));
			}
		}
	],
	"server": {
		"baseDir": "public",
		"routes": {
			"/node_modules": "node_modules",
			"/config": "."
		}
	}
}
