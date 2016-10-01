var gulp = require('gulp');
var del = require('del');
var minibars = require('./index.js');

gulp.task('clean', function () {
    return del(['testOutput/']);
});

gulp.task('testamd', ['clean'], function () {
    return gulp.src('testTemplates/*.html')
        .pipe(minibars({
            outputType: 'amd'
        }))
        .pipe(gulp.dest('testOutput/amd/'));
});

gulp.task('testcommonjs', ['clean'], function () {
    return gulp.src('testTemplates/*.html')
        .pipe(minibars({
            outputType: 'commonjs'
        }))
        .pipe(gulp.dest('testOutput/commonjs/'));
});

gulp.task('testwindow', ['clean'], function () {
    return gulp.src('testTemplates/*.html')
        .pipe(minibars({
            outputType: 'window'
        }))
        .pipe(gulp.dest('testOutput/window/'));
});

gulp.task('testdefault', ['clean'], function () {
    return gulp.src('testTemplates/*.html')
        .pipe(minibars())
        .pipe(gulp.dest('testOutput/default/'));
});

gulp.task('test', ['testamd', 'testcommonjs', 'testwindow', 'testdefault']);

gulp.task('default', ['test']);
