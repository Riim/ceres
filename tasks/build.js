var postcssSimpleVars = require('postcss-simple-vars');
var postcssColorFunction = require('postcss-color-function');
var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('../build/config');

gulp.task('build', function() {
	return gulp.src(config.styles.src)
		.pipe($.concat(config.styles.outputName + '.css'))
		.pipe($.postcss([
			postcssSimpleVars,
			postcssColorFunction,
			autoprefixer({ browsers: ['last 2 version', '> 1%'] })
		]))
		.pipe(gulp.dest(config.dist))
		.pipe($.rename({ suffix: '.min' }))
		.pipe($.csso())
		.pipe(gulp.dest(config.dist));
});
