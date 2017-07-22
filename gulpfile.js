const gulp = require('gulp'),
      zip = require('gulp-zip'),
      rename = require('gulp-rename'),
      clean = require('gulp-clean');

const extensionName = 'trello-card-id';

gulp.task('default', ['firefox', 'chrome']);

// firefox
gulp.task('firefox', buildExtension.bind(null, 'firefox', 'xpi'));

// chrome, edge and opera
gulp.task('chrome', buildExtension.bind(null, 'chrome', 'zip'));

function buildExtension(type, ext) {
    return gulp.src([`manifest.${type}.json`, 'images/icon*.png', 'style.css', 'script.js'], {base: './'})
        .pipe(rename(path => {
            if (path.basename == `manifest.${type}`) {
                path.basename = 'manifest';
            }
        }))
        .pipe(zip(`${extensionName}.${type}.${ext}`))
        .pipe(gulp.dest('dist'));
}

// remove
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});
