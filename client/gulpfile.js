var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var testConfiguration = require('./webpack.test.config');

gulp.task('test', function() {
    return gulp.src(['spec/**/*_spec.js'])
      .pipe(webpack(testConfiguration))
      .pipe(jasmineBrowser.specRunner())
      .pipe(jasmineBrowser.server());
});