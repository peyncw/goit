'use strict';
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	server = require('gulp-server-livereload'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	jsmin = require('gulp-jsmin'),
	image = require('gulp-image');


gulp.task('pages', function(){
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
});

gulp.task('fonts', function(){
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('image', function () {
	gulp.src('src/images/**/*')
		.pipe(image())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('sass', function () {
	gulp.src('src/sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(rename('style.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
	gulp.src('src/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(jsmin())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('webserver', function() {
	gulp.src('dist')
		.pipe(server({
			livereload: true,
			open: true
		}));
});

gulp.task('default', function() {
	gulp.start('sass', 'webserver', 'pages', 'js', 'image', 'fonts');
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/index.html', ['pages']);
	gulp.watch('src/fonts/**/*', ['fonts']);
	gulp.watch('src/images/**/*', ['image']);
	gulp.watch('src/js/**/*.js', ['js']);
});

