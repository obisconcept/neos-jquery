// Grab packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch');

// Create build js task
gulp.task('build-js', function() {

    gutil.log('Generate js files ...');

    // jQuery js file
    gulp.src('Resources/Private/Assets/JavaScript/jquery.js')
        .pipe(sourcemaps.init())
        .pipe(concat('jquery.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('jquery.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

});

// Create default task
gulp.task('default', function() {

    gulp.src('Resources/Private/Assets/JavaScript/**/*.js', {read: false})
        .pipe(watch('Resources/Private/Assets/JavaScript/**/*.js', function() {
            gulp.start('build-js');
        }))
        .pipe(notify({
            'title': 'Neos CMS jQuery Package',
            'message': 'JavaScript files were generated'
        }));

});