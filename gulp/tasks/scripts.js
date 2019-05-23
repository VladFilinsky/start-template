let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/js/",
        "ouput": "./build/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            'node_modules/imask/dist/imask.min.js',
            'node_modules/js-cookie/src/js.cookie.js',
            'node_modules/wowjs/dist/wow.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            'node_modules/imask/dist/imask.min.js',
            'node_modules/js-cookie/src/js.cookie.js',
            'node_modules/wowjs/dist/wow.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            //.pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
