const plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    cached = require('gulp-cached');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src(['./src/pug/*.pug', './src/pug/pages/**/*.pug'])
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug'))
            .pipe($.gulp.dest('./dev/'))
            .pipe($.gulp.dest('./live/'))
            .on('end', $.browserSync.reload);
    });
};
