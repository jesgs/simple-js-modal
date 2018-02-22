const gulp = require('gulp'),
      sourcemaps = require('gulp-sourcemaps'),
      babel = require('gulp-babel'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      cssmin = require('gulp-cssmin'),
      eslint = require('gulp-eslint'),
      del = require('del'),
      vinylPaths = require('vinyl-paths');

gulp.task('clean', () => {
    return gulp.src('dist/**/*.*', {read: false})
        .pipe(vinylPaths(del));
});

gulp.task('eslint', () => {
    return gulp.src(['assets/scripts/*.js','!dist/**','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('babel', gulp.series('eslint', (done) => {
    return gulp.src('assets/scripts/**.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/scripts'));
}));

gulp.task('uglify', () => {
    return gulp.src(['dist/assets/scripts/**.js', '!dist/assets/scripts/**.min.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('sass', () => {
    return gulp.src('assets/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/styles'))
        .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('cssmin', () => {
    return gulp.src(['dist/assets/styles/**.css', '!dist/assets/styles/**.min.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('watch', () => {
    gulp.watch('assets/scripts/*.js', gulp.series('babel', 'uglify'));
    gulp.watch('assets/styles/*.scss', gulp.series('sass', 'cssmin'));
});

gulp.task('compile', gulp.series('clean', 'babel', 'sass', 'uglify', 'cssmin', function(done) {
    gulp.src('assets/images/*')
        .pipe(gulp.dest('dist/assets/images'));

    gulp.src('assets/styles/default.css')
        .pipe(gulp.dest('dist/assets/styles'));

    gulp.src(['index.html', 'README.md'])
        .pipe(gulp.dest('dist'));

    done();
}));