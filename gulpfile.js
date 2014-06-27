var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var paths = {
  styles: {
    dest: './css/',
    src: './scss/blog.scss',

    min: 'blog.min.css',
    unmin: 'blog.css',

    files: [
      'bower_components/skeleton/stylesheets/base.css',
      'bower_components/skeleton/stylesheets/skeleton.css',
      './scss/blog.scss'
    ]
  }
};

gulp.task('sass', function () {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      outputStyle : 'compressed',
      errLogToConsole: true,
      includePaths : [paths.styles.src]
    }))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('concat', function(){
  return gulp.src(paths.styles.files)
    .pipe(concat(paths.styles.unmin))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('styles', ['sass', 'concat']);
