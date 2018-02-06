var gulp         = require('gulp');
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    del          = require('del');
    shell        = require('gulp-shell')
    sourcemaps   = require('gulp-sourcemaps');
    responsive   = require('gulp-responsive');
    imagemin     = require('gulp-imagemin');
    mozjpeg     = require('imagemin-mozjpeg');


// Compile SCSS files to CSS
gulp.task('scss', function () {

    // Delete our old css files
    del(['static/css/**/*'])

    // Compile hashed css files
    gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(autoprefixer({browsers : ['last 20 versions']}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/css')) // Write the renamed files
});

// Pipe gifs to static folder
  gulp.task('gifs', function () {
    del(['static/images/**/*'])
    gulp.src('src/images/**/*.gif')
    .pipe(gulp.dest('static/images'))
});

// responsive images
gulp.task('img', function () {
  // delete static folder
  del(['static/images/**/*'])
  // create 4 different sizes
  gulp.src('src/images/*.{jpg,png}')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 200,
        rename: { suffix: '-200px' },
      }, {
        width: 500,
        rename: { suffix: '-500px' },
      }, {
        width: 630,
        rename: { suffix: '-630px' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],
      // Resize all PNG images to be retina ready
      '*.png': [{
        width: 250,
      }, {
        width: 250 * 2,
        rename: { suffix: '@2x' },
      }],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
       // Don't spam the console
      silent: true
    }))
    .pipe(gulp.dest('./static/images')) // pipe to static folder
});

// compress images in static folder
gulp.task('img:build', ['img'], () =>
  gulp.src(['./static/images/*.{jpg,png,gif,svg}'])
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      mozjpeg(),
    ]))
    .pipe(gulp.dest('./static/images'))
);


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
gulp.task('watch', ['scss', 'gifs', 'img', 'img:build', 'js', 'fonts'], function () {
    gulp.watch('src/scss/**/*', ['scss']);
    gulp.watch('src/images/**/*.gif', ['gifs']);
    gulp.watch('./src/images/**.*', ['img']);
    gulp.watch('./static/images/*.{jpg,png,gif,svg}', ['img:build']);
    gulp.watch('src/js/**/*', ['js']);
    gulp.watch('src/fonts/**/*', ['fonts']);
});

// Set watch as default task
gulp.task('default', ['watch']);

// Run all tasks ready for production
gulp.task('prod', ['scss', 'gifs', 'img', 'img:build', 'js', 'fonts']);

// Building the site in 'production mode' ready for deployment
gulp.task('build', shell.task([
  'rm -rf public',
  'gulp prod',
  'hugo'
]))
