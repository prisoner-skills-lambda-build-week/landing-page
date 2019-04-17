const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const del = require('del');

// Clean Public Directory
function cleanDirectory() {
  return del(['public/assets/css/*.css', 'public/assets/js/*.js', 'public/*.html']);
}

// Pipe HTML
function pipeHtml() {
  return gulp
      .src('src/*.html')
      .pipe(gulp.dest('public/'));
}

// Pack CSS
function pipeCss() {
  return gulp
      .src('src/assets/css/*.css')
      .pipe(gulp.dest('public/assets/css/'));
}
// Pack JS
function concatJs() {
  return gulp
      .src(['src/assets/scripts/*.js'])
      .pipe(plumber())
      .pipe(concat(`index.js`))
      .pipe(gulp.dest('public/'))
      .pipe(gulp.dest('src/'));
}

// Watch Files
function watchFiles() {
  gulp.watch('src/assets/css/*.css', pipeCss);
  gulp.watch(['src/assets/scripts/*.js'], concatJs);
}

// Complex Tasks
const buildPublic = gulp.series(cleanDirectory, gulp.parallel(pipeHtml, pipeCss, concatJs));

// Export Tasks
exports.cleanDirectory = cleanDirectory;
exports.pipeHtml = pipeHtml;
exports.pipeCss = pipeCss;
exports.concatJs = concatJs;
exports.buildPublic = buildPublic;
exports.watchFiles = watchFiles;
exports.default = buildPublic;
