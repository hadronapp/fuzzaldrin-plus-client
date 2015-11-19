var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
  return gulp.src('./index.js', { read: false })
             .pipe(browserify()) // { transform: ['coffeeify'], extensions: ['.coffee'] }
             .pipe(concat('fuzzaldrin-plus.js'))
             .pipe(gulp.dest('./build'))
             .pipe(gulp.dest('./demo'));

});

gulp.task('default', function () {
  gulp.run('scripts');
});
