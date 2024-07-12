const { src, dest, watch } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');




function styles() {
    return src('start.gulp/sapp/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(scss({outputStyle: 'expanded'}))
}

function scripts() {
    return src([
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
}

function watching() {
    watch(['app/scss/**/*.scss'],)
}


exports.styles = styles;
exports.scripts = scripts;


exports.watching = watching;
