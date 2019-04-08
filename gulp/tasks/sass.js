let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    stylesPATH = {
        "input": "./dev/sass/",
        "ouput": "./build/css/"
    };

module.exports = function () {
    $.gulp.task('sass:dev', () => {
        return $.gulp.src(stylesPATH.input + 'main.sass')
            .pipe(plumber({errorHandler: notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            })}))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(sourcemaps.write())
            //.pipe(rename('main.min.css'))
            .pipe($.gulp.dest(stylesPATH.ouput))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('sass:build', () => {
        return $.gulp.src(stylesPATH.input + 'main.sass')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(csscomb())
            .pipe($.gulp.dest(stylesPATH.ouput))
    });
    $.gulp.task('sass:build-min', () => {
        return $.gulp.src(stylesPATH.input + 'main.sass')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(csscomb())
            .pipe(csso())
            //.pipe(rename('main.min.css'))
            .pipe($.gulp.dest(stylesPATH.ouput))
    });
};
