gulp = require 'gulp'
sass = require 'gulp-sass'
rename = require 'gulp-rename'
autoprefixer = require 'gulp-autoprefixer'
sourcemaps = require 'gulp-sourcemaps'
handleErrors = require '../util/handleErrors'


gulp.task 'sass', ->
  gulp.src './app/css/main.scss'
  .pipe sass({ style: 'expanded', sourceComments: 'map', errLogToConsole: true, includePaths: './app/bower_components'})
  .pipe sourcemaps.write()
  .pipe gulp.dest('./build/css');