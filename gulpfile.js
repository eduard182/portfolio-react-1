const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');
const browserSync = require('browser-sync');
const del = require('del');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('default', ['serve']);

gulp.task('build', [
  'clean',
  'images',
  'data',
  'template',
  'js',
]);

gulp.task('set-dev-node-env', () => {
  process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', () => {
  process.env.NODE_ENV = 'production';
});

gulp.task('release-build', ['set-prod-node-env', 'build'], () => gulp.src('./.htaccess')
  .pipe(gulp.dest('./dist'))
);

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: './dist',
    middleware: [historyApiFallback()],
  });

  gulp.watch('./src/**/*.js*', ['js']);
  gulp.watch('./src/**/*.html', ['template']);
  gulp.watch('./src/data/*', ['data']);

  gulp.watch('dist/public/*.html').on('change', browserSync.reload);
  gulp.watch('dist/public/js/*.js').on('change', browserSync.reload);
  gulp.watch('dist/data/**').on('change', browserSync.reload);
});

gulp.task('images', () => gulp.src('./src/assets/**/*')
  .pipe(gulp.dest('./dist/public/assets'))
);

gulp.task('template', () => gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream())
);

gulp.task('clean', () => del.sync(['./dist/**']));

gulp.task('data', () => gulp.src('./src/**/*.json')
  .pipe(gulp.dest('./dist'))
);

gulp.task('js', () => {
  const webpackConfig = require('./webpack.config.js');
  return webpack(webpackConfig)
    .pipe(gulp.dest('./dist/public/js'));
});

gulp.task('eslint', () => gulp.src(['./src/**/*.js', './src/**/*.jsx'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch('./src/**/**/*.html', ['template']);
  gulp.watch('./src/**/**/*.js*', ['js', 'eslint']);
});
