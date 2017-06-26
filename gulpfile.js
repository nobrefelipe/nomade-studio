var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),


  paths = {
    js: {
      src: 'dev/js',
      dest: 'static/js',
      bower: 'bower_components'
    },
    css: {
      src: 'dev/scss',
      dest: 'static/css'
    },
    svgs: {
      src: 'dev/svg',
      dest: 'static/svg'
    }
  };




/*
  Styles Task
*/
  gulp.task('styles', function() {
    gulp.src(paths.css.src + '/**/*.scss')
      .pipe(plumber({
        errorHandler: function(error) {
          console.log('Styles Error: ' + error.message);
          this.emit('end');
        }
      }))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer('last 2 version'))
      .pipe(minifycss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.css.dest));
  });



/*
  Scripts - Hint
*/
  gulp.task('hint', function() {
    return gulp.src(paths.js.src + '/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'));
  });


/*
  Scripts - Concat and Uglify
*/
  gulp.task('scripts', function() {
    gulp.src([
        paths.js.bower + '/svg4everybody/dist/svg4everybody.js',
        // paths.js.bower + '/owl.carousel/dist/owl.carousel.min.js',
        paths.js.src + '/**/*.js'
      ])
      .pipe(plumber({
        errorHandler: function(error) {
          console.log('Scripts Error: ' + error.message);
          this.emit('end');
        }
      }))
      .pipe(concat('./all.min.js'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.js.dest));
  });


/*
 SVG - Sprite and Minify
 */
  gulp.task('svg', function() {
    return gulp.src(paths.svgs.src + '/**/*.svg')
        .pipe(svgmin(function (file) {
          return {
            plugins: [{
              cleanupIDs: {
                minify: true
              }
            }]
          }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(paths.svgs.dest));
  });


/*
  Default and Watch Task
*/
  gulp.task('default', ['styles', 'scripts', 'svg'], function() {
    gulp.watch(paths.svgs.src + '/**/*.svg', ['svg']);
    gulp.watch(paths.css.src + '/**/*.scss', ['styles']);
    gulp.watch(paths.js.src + '/**/*.js', ['scripts']);
  });

gulp.task('build', ['styles', 'scripts', 'svg']);
