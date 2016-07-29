gulp = require 'gulp'
concat = require 'gulp-concat'
browserSync = require 'browser-sync'
coffee = require 'gulp-coffee'
reload = browserSync.reload

gulp.task 'clientscripts', ->
	gulp.src 'app/js/**/*.coffee'
		.pipe(coffee({bare: true}))
		.pipe(concat('main.js'))
	  .pipe(gulp.dest('build/js'))
	  .pipe reload({ stream: true })




