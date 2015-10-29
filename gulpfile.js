//'use strict';

var gulp = require('gulp'),
 stylus = require('gulp-stylus'),
 minifyCss = require('gulp-minify-css'),
 jade = require('gulp-jade'),
 autoprefixer = require('gulp-autoprefixer'),
 plumber = require('gulp-plumber'),
 concat = require('gulp-concat'),
 uglify = require('gulp-uglifyjs'),
 spritesmith = require('gulp.spritesmith');

gulp.task('allcss', function () {
  gulp.src('./stylus/**/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers : ['> 1%', 'last 3 versions','Firefox > 12', 'ie > 7']
        }))
        .pipe(gulp.dest('./public_html/css/dev'))
        .pipe(gulp.dest('../testsite/dist/css/dev'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./public_html/css/min'))
        .pipe(gulp.dest('../testsite/dist/css/min'));
});

gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./sprite/*.png')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                cssFormat: 'css',
                algorithm: 'top-down',
                padding: 5
            }));
    spriteData.img.pipe(gulp.dest('./public_html/img/'));
    spriteData.img.pipe(gulp.dest('../testsite/dist/img/'));
    spriteData.css.pipe(gulp.dest('./public_html/css/'));
    spriteData.css.pipe(gulp.dest('../testsite/dist/css/'));
});

gulp.task('jade', function() {
  gulp.src('jade/*.jade')
    .pipe(jade({
      pretty: true //  uncompress html
    }))
    .pipe(gulp.dest('./public_html'))
    .pipe(gulp.dest('../testsite/dist'))
});

gulp.task('uglify', function() {
  gulp.src('./public_html/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public_html/js/dev'))
    .pipe(gulp.dest('../testsite/dist/js/dev'))
    .pipe(uglify())
    .pipe(gulp.dest('./public_html/js/min'))
    .pipe(gulp.dest('../testsite/dist/js/min'))
});

gulp.task('watch', function() {
  gulp.watch('./stylus/**/*.styl', ['allcss']);
  gulp.watch('jade/*.jade', ['jade']);
  gulp.watch('./public_html/js/*.js', ['uglify']);
});

gulp.task('default', function() {
  gulp.start('allcss','jade','uglify','sprite','watch');
});
