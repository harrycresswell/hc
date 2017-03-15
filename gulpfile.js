var gulp         = require('gulp');
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    del          = require('del');
    shell        = require('gulp-shell')


// Compile SCSS files to CSS
gulp.task('scss', function () {

    // Delete our old css files
    del(['static/css/**/*'])

    // Compile hashed css files
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(autoprefixer({browsers : ['last 20 versions']}))
        .pipe(gulp.dest('static/css')) // Write the renamed files
});

// Pipe images to static folder
gulp.task('images', function () {
    del(['static/images/**/*'])
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('static/images'))
});

// Pipe JS to static folder
gulp.task('js', function () {
    del(['static/js/**/*'])
    gulp.src('src/js/**/*')
        .pipe(gulp.dest('static/js'))
});

// Pipe fonts to static folder
gulp.task('fonts', function() {
    del(['static/fonts/**/*'])
    gulp.src(['src/fonts/**/*'])
      .pipe(gulp.dest('static/fonts'))
});

// Watch asset folder for changes
gulp.task('watch', ['scss', 'images', 'js', 'fonts'], function () {
    gulp.watch('src/scss/**/*', ['scss']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/js/**/*', ['js']);
    gulp.watch('src/fonts/**/*', ['fonts']);
});

// Set watch as default task
gulp.task('default', ['watch']);

// Run all tasks ready for production
gulp.task('prod', ['scss', 'images', 'js', 'fonts']);

// Building the site in 'production mode' ready for deployment
gulp.task('build', shell.task([
  'rm -rf public',
  'gulp prod',
  'hugo'
]))
