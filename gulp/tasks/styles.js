const plumber = require('gulp-plumber'),
      scss = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      csscomb = require('gulp-csscomb'),
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      stylesPATH = {
          "input": "./src/static/styles/",
          "output_dev": "./dev/static/css/",
          "output_live": "./live/static/css/"
      };

module.exports = function () {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src([stylesPATH.input + 'styles.scss', stylesPATH.input + 'pages/**/*.scss'])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(scss())
            .pipe(autoprefixer({
                 overrideBrowserslist:  ['last 10 versions']
            }))
            .pipe(csscomb())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(stylesPATH.output_dev))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('styles:build', () => {
        return $.gulp.src([stylesPATH.input + 'styles.scss', stylesPATH.input + 'pages/**/*.scss'])
            .pipe(scss())
            .pipe(autoprefixer({
                overrideBrowserslist:  ['last 10 versions']
            }))
            .pipe(csscomb())
            .pipe(csso())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(stylesPATH.output_live))
    });
};
