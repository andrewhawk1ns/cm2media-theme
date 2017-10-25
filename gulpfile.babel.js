'use strict';


import gulp from 'gulp';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import merge from 'gulp-merge';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';

const config = require("./package.json").config;

gulp.task('frontend', () => {
    return gulp.src('js/*.js')
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat(config.public.frontendScripts))
        .pipe(gulp.dest(config.public.dest))
        .pipe(rename(config.public.frontendScriptsMin))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public')), {base: './assets/'})
  });

  gulp.task('admin', () => {
    return gulp.src('js/*.js')
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat(config.public.adminScripts))
        .pipe(gulp.dest(config.public.dest))
        .pipe(rename(config.public.adminScriptsMin))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public')), {base: './assets/'})
  });

gulp.task('build', ['frontend', 'admin']);

  