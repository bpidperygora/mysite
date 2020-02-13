const uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./src/static/js/",
        "output_dev": "./dev/static/js/",
        "output_live": "./live/static/js/"
    },
    babel = require('gulp-babel');

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.output_dev));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output_live));
    });

    $.gulp.task('js', () => {
        return $.gulp.src([scriptsPATH.input + '**/*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe($.gulp.dest(scriptsPATH.output_dev))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '**/*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe($.gulp.dest(scriptsPATH.output_live))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

};
