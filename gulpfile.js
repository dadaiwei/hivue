const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const del = require('del');
const chalk = require('chalk');

gulp.task('scss', function() {
  return gulp.src('packages/theme/theme-default/index.scss')
      .pipe(sass())
      .pipe(concat('index.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('lib/theme'));
});

gulp.task('clean', function() {
  del(['lib/theme', 'lib/iconfont']);
});

gulp.task('copy', function() {
  return gulp.src(['packages/theme/iconfont/*.eot',
                   'packages/theme/iconfont/*.svg',
                   'packages/theme/iconfont/*.ttf',
                   'packages/theme/iconfont/*.woff',
                   'packages/theme/iconfont/*.woff2'])
             .pipe(gulp.dest('lib/iconfont'))
});

gulp.task('default', ['clean', 'scss', 'copy'], function() {
  console.log(chalk.green('generate theme success!'));
});