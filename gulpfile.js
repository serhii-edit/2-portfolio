var gulp = require("gulp");
var { src, dest, series, watch, on } = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

function dist(done) {
return src (["./src/**/*", "!src/scss/**"])
  .pipe(dest("dist/"));
  done();
}

// Static server
function bs() {
  browserSync.init({
      server: {
          baseDir: "./src/"
      }
  });
  watch("./src/**/*.html").on('change', browserSync.reload);
  watch("./src/css/**/*.css").on('change', browserSync.reload);
  watch("./src/scss/**/*.scss", {ignoreInitial: false}, scss);
  watch("./src/js/**/*.js", {ignoreInitial: false}).on("change", browserSync.reload);
};

function scss(done) {
  return src("./src/scss/**/*.scss")
  .pipe(sass())
  .pipe(dest("./src/css/"))
  .pipe(browserSync.stream());
  done();
  // done addes may cause Errors!
};



exports.serve = series(bs);
exports.build = series(dist);

// Error
// function callbackError(cb) {
//   // `cb()` should be called by some async work
//   cb(new Error('kaboom'));
// }

// exports.default = callbackError;