import gulp         from 'gulp';
import sass         from 'gulp-sass';
import plumber      from 'gulp-plumber';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker     from 'css-mqpacker';
import csso         from 'gulp-csso';
import rename       from 'gulp-rename';

gulp.task('style', () => {
  return gulp.src('src/sass/style.{scss,sass}')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({ browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ] }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso({ restructure: false }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});
