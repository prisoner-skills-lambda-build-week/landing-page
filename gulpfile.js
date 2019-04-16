const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const del = require('del');

// Clean Public Directory
function cleanDirectory() {
    return del(['public/assets/'])
}

// Pack CSS
function css() {
    return gulp
        .src('src/css/index.css')
        .pipe(gulp.dest('public/assets/'))
}
// Pack JS
function concatScripts() {
    return (
        gulp
            .src(['src/scripts/*.js'])
            .pipe(plumber())
            .pipe(concat('index.js'))
            .pipe(gulp.dest('public/assets/'))
    );
}

// Watch Files
function watchFiles() {
    gulp.watch('src/css/*', css);
    gulp.watch('src/scripts/*', concatScripts);
}

// Complex Tasks
const build = gulp.series(cleanDirectory, gulp.parallel(css, concatScripts));

// Export Tasks
exports.css = css;
exports.concatScripts = concatScripts;
exports.build = build;
exports.watchFiles = watchFiles;
exports.default = build;
