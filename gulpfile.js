const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');



gulp.task('babel', () =>
    gulp.src('app/js/*.js')
    .pipe(concat('all-concat.js'))    
    .pipe(babel({
        presets: ["env"]
    }))
    .pipe(gulp.dest('web/js/'))
);

gulp.task('minify-js', function (cb) {
    pump([
            gulp.src('web/js/all-concat.js'),
            uglify(),
            gulp.dest('web/js/')
        ],
        cb
    );
});