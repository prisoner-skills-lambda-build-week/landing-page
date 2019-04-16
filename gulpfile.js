const gulp = require('gulp');
const concat = require('gulp-concat');

// Pack JS
function js() {
    return gulp 
    .src(['src/scripts/*.js'])
}

// Pack CSS
function css() {
    return gulp
    .src(['src/css/index.css'])
    .pipe(gulp.dest('public/index.css'))
}

// Default Task
gulp.task('default', ['pack-js', 'pack-css']);