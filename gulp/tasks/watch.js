module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/templates/**/*.html', $.gulp.series('nunjucks'));
        $.gulp.watch('./dev/sass/**/*.sass', $.gulp.series('sass:dev'));
        $.gulp.watch(['./dev/img/**/*.{png,jpg,svg,gif}',
            '!./dev/img/favicon/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
        $.gulp.watch('./dev/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/js/**/*.js', $.gulp.series('js:dev'));
    });
};