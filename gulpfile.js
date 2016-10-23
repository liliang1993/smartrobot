/**
 * Created by tengxia on 2016/6/30.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin');

gulp.task('less', function () {
    gulp.src('static/less/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('static/css/'))
})

gulp.task('default', ['less']);