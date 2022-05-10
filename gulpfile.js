const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', async (cb) => {
  console.log('Building site');
  setTimeout(() => {
    cb();
  }, 1200);
});

gulp.task('serve', (cb) => {
  gulp.src('automatization/www').pipe(server({ livereload: true, open: true }));
});

gulp.task('default', gulp.series('build', 'serve'));
