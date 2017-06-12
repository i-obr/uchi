import gulp        from 'gulp';
import watch       from 'gulp-watch';
import run         from 'run-sequence';
import browserSync from 'browser-sync';

gulp.task('watch', () => {
  global.watch = true;

  watch('src/sass/**/*.{scss,sass}', () => {
    run('style', browserSync.reload);
  });

  watch('src/*.html', () => {
    run('copy:html', browserSync.reload);
  });

  watch('src/img/**', () => {
    run('copy:img', browserSync.reload);
  });

  watch('src/js/**/*.js', () => {
    run('scripts', browserSync.reload);
  });
});
