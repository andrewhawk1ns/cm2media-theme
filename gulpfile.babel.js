'use strict';

import babel from 'gulp-babel';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
//import browsersync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import merge from 'gulp-merge';
import concat from 'gulp-concat';
//import autoprefixer from 'gulp-autoprefixer';

const config = require("./package.json").config;

gulp.task('frontendJS', () => {
    return gulp.src(config.assets.frontendScripts)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat(config.public.frontendScripts))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.public.destJS))
        .pipe(rename(config.public.frontendScriptsMin))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destJS))
  });
  
  gulp.task('adminJS', () => {
    return gulp.src(config.assets.adminScripts)
    .pipe(sourcemaps.init({'loadMaps': true}))
    .pipe(concat(config.public.adminScripts))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(config.public.destJS))
    .pipe(rename(config.public.adminScriptsMin))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.public.destJS))
  });

  gulp.task( 'images', function() {
    gulp.src( config.assets.images )
      .pipe( imagemin( {
            progressive: true,
            optimizationLevel: 3,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}]
          } ) )
      .pipe(gulp.dest(config.public.destIMG))
  });

gulp.task('build', ['images', 'frontendJS', 'adminJS']);

  