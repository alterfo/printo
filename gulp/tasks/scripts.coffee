gulp = require 'gulp'
concat = require 'gulp-concat'
browserSync = require 'browser-sync'
coffee = require 'gulp-coffee'
uglify = require 'gulp-uglify'
plumber = require 'gulp-plumber'
reload = browserSync.reload

gulp.task 'clientscripts', ->
  gulp.src 'app/js/**/*.coffee'
    .pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(concat('main.js'))
#    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe reload({ stream: true })




