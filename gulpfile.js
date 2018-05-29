const
  //------------- gulp
  gulp = require('gulp'),
  //------------- global
  runSequence = require('run-sequence'),
  concat = require('gulp-concat'),
  bs = require('browser-sync').create(),
  watch = require('gulp-watch'),
  cache = require('gulp-cached'),
  //------------- css
  postcss = require('gulp-postcss'),
  cssnext = require('postcss-cssnext'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  groupQueries = require('gulp-group-css-media-queries'),
  //------------- js
  depsOrder = require('gulp-deps-order'),
  babel = require('gulp-babel'),
  //------------- html
  fileinclude = require('gulp-file-include'),
  //------------- images
  imagemin = require('gulp-imagemin'),
  //------------- paths
  paths = require('./gulp.paths.json');

//
//browser sync
///////////////////////////////////////////
gulp.task('sync', () =>
  bs.init({
      server: {
          baseDir: "./dist"
      }
  })
)

//
//@css/styleguide css
///////////////////////////////////////////
gulp.task('css', () =>
    gulp.src( paths.src.css.files )
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('bundle.css'))
      .pipe(groupQueries())
      .pipe(sourcemaps.write( '.' ))
      .pipe(gulp.dest( paths.dest.css ))
      .pipe(bs.stream())
)

//
//@js/styleguide js
///////////////////////////////////////////
gulp.task('js', () =>
  gulp.src( paths.src.js )
    .pipe(babel())
    .pipe(depsOrder())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( paths.dest.js ))
    .pipe(bs.stream())
)

//
//@html includes
///////////////////////////////////////////
gulp.task('html', () =>
  gulp.src( paths.src.views.files )
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest( paths.dest.views ))
    .pipe(bs.stream())
)

//
//@minify images
///////////////////////////////////////////
gulp.task('image', () =>
  gulp.src( paths.src.img )
    .pipe(cache('images'))
    .pipe(imagemin())
    .pipe(gulp.dest( paths.dest.img ))
    .pipe(bs.stream())
)


//
//pdf
///////////////////////////////////////////
gulp.task('pdf', () =>
   gulp.src( './src/pdf/*.pdf' )
  .pipe(gulp.dest( './dist/pdf' ))
  .pipe(bs.stream())
)


//
//@watch
///////////////////////////////////////////
gulp.task('watch', () => {
  watch(paths.src.views.watch, () => gulp.start('html'))
  watch(paths.src.css.watch, () => gulp.start('css'))
  watch(paths.src.js, () => gulp.start('js'))
  watch(paths.src.img, () => gulp.start('image'))
  watch( './src/pdf/*.pdf', () => gulp.start('pdf'))
})

//
//@tasks default
///////////////////////////////////////////
gulp.task('webserver', ['sync', 'watch'])
gulp.task('build', ['html', 'css', 'js', 'image', 'pdf'])
gulp.task('default', runSequence('build', 'webserver'))
