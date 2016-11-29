var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var testConfiguration = require('./webpack.test.config');
var jasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');

function specPipe(plugin, watch) {
    var testConfigurationWithTestPlugins = Object.assign({}, testConfiguration, {
          watch: watch,
          plugins: testConfiguration.plugins.concat([plugin])
    });

    return gulp.src(['spec/**/*_spec.js'])
      .pipe(webpack(testConfigurationWithTestPlugins));
}

gulp.task('test-browser', function() {
    var plugin = new jasminePlugin();
    return specPipe(plugin, true)
      .pipe(jasmineBrowser.specRunner())
      .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('test-headless', function() {
    var plugin = new jasminePlugin();
    return specPipe(plugin, false)
      .pipe(jasmineBrowser.specRunner({console: true}))
      .pipe(jasmineBrowser.headless());
});