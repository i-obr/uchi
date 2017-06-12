import gulp  from 'gulp';
import run   from 'run-sequence';

gulp.task('build', () => {
  run(
      'clean',
      ['copy:fonts', 'copy:img', 'copy:html', 'style', 'images'],
      'symbols',
      'scripts',
      'deploy'
    );
});
