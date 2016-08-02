gulp = require 'gulp'
browserSync = require 'browser-sync'
inject = require 'gulp-inject'
reload = browserSync.reload

gulp.task 'html', ->
	sources = gulp.src ['./build/**/*.js', './build/**/*.css'], read: false
	gulp.src './app/html/index.html'
		.pipe inject sources
		.pipe gulp.dest('./build')
		.pipe reload({ stream: true })
		