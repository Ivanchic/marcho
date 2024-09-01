const { src, dest, watch } = require('gulp');
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");

function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest('app/css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
      })
    )
    .pipe(scss({ outputStyle: "expanded" }));
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'app/js/main.js'
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

function watching() {
  watch(["app/scss/**/*.scss"]);
}

exports.styles = styles;
exports.scripts = scripts;

exports.watching = watching;
