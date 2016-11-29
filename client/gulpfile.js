var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var testConfiguration = require('./webpack.test.config');

gulp.task('test', function() {
    var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
    var plugin = new JasminePlugin();
    var testConfigurationWithTestPlugins =  Object.assign({}, testConfiguration, {
        plugins: testConfiguration.plugins.concat([plugin])}
    );

    return gulp.src(['spec/**/*_spec.js'])
      .pipe(webpack(testConfigurationWithTestPlugins))
      .pipe(jasmineBrowser.specRunner())
      .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});