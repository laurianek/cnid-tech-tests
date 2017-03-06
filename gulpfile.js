const gulp = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const config = {
  files: {
    mainJs: 'src/app/app.jsx',
    js: ['src/app/**/*.js', 'src/app/**/*.jsx'],
    html: 'src/index.html'
  },
  dest: {
    assets: './dist/assets',
    root: './dist'
  }
};

gulp.task('pre:build:js', () => {
  return browserify(config.files.mainJs, {extensions: ['.jsx']})
    .transform('babelify', {presets: ['react', 'es2015'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.dest.assets));
});

gulp.task('build:js', ['pre:build:js'], () => {
  return gulp.src(`${config.dest.assets}/bundle.js`)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest.assets))
});

gulp.task('build:html', () => {
  return gulp.src(config.files.html)
    .pipe(gulp.dest(config.dest.root));
});

gulp.task('watch', ['build'], () => {
  gulp.watch(config.files.js, ['pre:build:js']).on('change', watchLog);
  gulp.watch(config.files.html, ['build:html']).on('change', watchLog);

  function watchLog(event) {
    console.log('Event type: ' + event.type); // added, changed, or deleted
    console.log('Event path: ' + event.path); // The path of the modified file
  }
});

gulp.task('build', ['build:js', 'build:html']);
