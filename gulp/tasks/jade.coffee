gulp = require 'gulp'
jade = require 'gulp-jade'
browserSync = require 'browser-sync'
inject = require 'gulp-inject'
mainBowerFiles = require 'main-bower-files'

reload = browserSync.reload

gulp.task 'jade', ->
  gulp.src './app/jade/index.jade'
  .pipe jade({})
#  .pipe inject gulp.src mainBowerFiles()
  .pipe gulp.dest('./build')
  .pipe reload({ stream: true })

