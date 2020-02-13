module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/static/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch(['./src/static/images/general/**/*.{png,jpg,gif,svg}',
            './src/static/images/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
        $.gulp.watch('./src/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/static/js/**/*.js', $.gulp.series('js'));
    });
};
