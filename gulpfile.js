'use strict'

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const del = require('del');
const plumber = require('gulp-plumber');
const styleLint = require('gulp-stylelint');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const watch = require('gulp-watch');
const run = require('run-sequence');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const ghPages = require('gulp-gh-pages');
const reload = browserSync.reload;

gulp.task('style', ['lint-css'], function() {
  return gulp.src('src/css/*.css')
    .pipe( plumber() )
    .pipe( sourcemaps.init() )
    .pipe( postcss([
        require('autoprefixer'),
        require('postcss-partial-import'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('postcss-mixins')
      ]) )
    .pipe( gulp.dest("build/css") )
    .pipe( csso() )
    .pipe( rename("style.min.css") )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/css') )
    .pipe( reload({ stream: true }));
});

gulp.task('lint-css', function() {
  return gulp.src('src/css/**/*.css')
    .pipe( styleLint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }) );
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe( gulp.dest('build/') )
    .pipe( reload({ stream: true }) );
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'build',
    notify: false,
    open: true,
    ui: false
  });
});

gulp.task('images', function() {
  return gulp.src('build/img/**/*.{png,jpg,gif}')
    .pipe( imagemin([
      imagemin.optipng({optimizationLever: 3}),
      imagemin.jpegtran({progressive: true})
    ]) )
    .pipe( gulp.dest('build/img') );
});

gulp.task('stream', function() {

  watch(['src/**/*.css'], function() {
    gulp.start('style');
  });

  watch(['src/*.html'], function() {
    gulp.start('html');
  });
});

gulp.task('copy', function() {
  return gulp.src([
    'src/fonts/**/*.{woff,woff2}',
    'src/img/**',
    'src/js/**'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('build/'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('build', function(fn) {
  run('clean', 'copy', 'html', 'style', 'images', 'serve', 'stream', fn);
});
