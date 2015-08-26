var postcssSimpleVars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('../config');

gulp.task('build', function() {
	return gulp.src([
		config.src + '/base.css',
		config.src + '/textfield.css',
		config.src + '/select.css',
		config.src + '/box.css',
		config.src + '/button.css',
		config.src + '/hint.css',
		config.src + '/tooltip.css',
		config.src + '/preloader.css',
		config.src + '/grid.css'
	])
		.pipe($.concat('ceres.css'))
		.pipe($.postcss([
			postcssSimpleVars,
			autoprefixer({ browsers: ['last 2 version', '> 1%'] })
		]))
		.pipe(gulp.dest(config.dist))
		.pipe($.rename({ suffix: '.min' }))
		.pipe($.csso())
		.pipe(gulp.dest(config.dist));
});
