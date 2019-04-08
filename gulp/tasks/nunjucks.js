let plumber = require('gulp-plumber'),
    data = require('gulp-data'),
    notify = require('gulp-notify'),
    nunjucks = require('gulp-nunjucks');

module.exports = function () {
    $.gulp.task('nunjucks', () => {
        return $.gulp.src('./dev/templates/*.html')
            .pipe(plumber({errorHandler: notify.onError(function (error) {
                return {
                    title: 'Nunjack',
                    message: error.message
                };
            })}))
            .pipe(data(() => ({name: 'Sindre'})))
            .pipe(nunjucks.compile())
            .pipe(plumber.stop())
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
