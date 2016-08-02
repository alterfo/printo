gulp = require 'gulp'

gulp.task 'watch', ['browserSync'], ->
	gulp.watch 'app/html/**/*.tpl.html', ['partials']
	gulp.watch 'app/jade/**/*.jade', ['jade']
	gulp.watch 'app/js/*.coffee', ['clientscripts']
	gulp.watch 'app/js/lib/*.js', ['vendorscripts']
	gulp.watch 'app/css/*.scss', ['sass']
	gulp.watch 'app/css/*.css', ['sass']
	gulp.watch 'app/i/**', ['images']

gulp.task 'setWatch', ->
	global.isWatching = true


	