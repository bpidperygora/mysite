module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/static/fonts/**/*.*')
            .pipe($.gulp.dest('./dev/static/fonts/'))
            .pipe($.gulp.dest('./live/static/fonts/'));
    });
};