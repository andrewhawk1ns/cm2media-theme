'use strict';

import babel from 'gulp-babel';
import sass from 'gulp-sass';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import browsersync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import merge from 'gulp-merge';
import concat from 'gulp-concat';
import minify from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const config = require("./package.json").config;

/**
 * Global Tasks
 */

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

gulp.task( 'browser-sync', function() {
    browsersync.init( {
      proxy: config.browsersync.projectURL,
      open: true,
      injectChanges: true,
    } );
  });


/**
 * Front End Tasks
 */

gulp.task('frontend:js', () => {
    return gulp.src(config.assets.frontend.scripts)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat(config.public.frontend.scripts))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.public.destJS))
        .pipe(rename(config.public.frontend.scriptsMin))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destJS))
  });

gulp.task('frontend:vendor:js', function() {
    return gulp
      .src(config.assets.frontend.vendor.scripts)
      .pipe(sourcemaps.init({'loadMaps': true}))
      .pipe(concat(config.public.frontend.vendor.scripts))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest(config.public.destJS));
  });

  gulp.task('frontend:sass', () => {
    return gulp.src(config.assets.frontend.stylesMain)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(config.public.frontend.styles))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(rename(config.public.frontend.stylesMin))
        .pipe(minify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destCSS))
  });

  gulp.task('frontend:vendor:sass', () => {
    return gulp.src(config.assets.frontend.vendor.stylesMain)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(sass({
            includePaths: config.assets.frontend.vendor.styles //Specify vendor styles here
        }).on('error', sass.logError))
        .pipe(rename(config.public.frontend.vendor.styles))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(rename(config.public.frontend.vendor.stylesMin))
        .pipe(minify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destCSS))
  });

/**
 * Front End Live Reload
 */

  gulp.task('frontend:sync:sass', () => {
    return gulp.src(config.assets.frontend.stylesMain)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(config.public.frontend.styles))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(browsersync.stream())
        .pipe(rename(config.public.frontend.stylesMin))
        .pipe(minify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(browsersync.stream())
  });

  gulp.task('frontend:sync:js', () => {
    return gulp.src(config.assets.frontend.scripts)
    .pipe(sourcemaps.init({'loadMaps': true}))
    .pipe(concat(config.public.frontend.scripts))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(config.public.destJS))
    .pipe(browsersync.stream())
    .pipe(rename(config.public.frontend.scriptsMin))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.public.destJS))
    .pipe(browsersync.stream())
  });

/**
 * Admin Tasks
 */
  
  gulp.task('admin:js', () => {
    return gulp.src(config.assets.admin.scripts)
    .pipe(sourcemaps.init({'loadMaps': true}))
    .pipe(concat(config.public.admin.scripts))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest(config.public.destJS))
    .pipe(rename(config.public.admin.scriptsMin))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.public.destJS))
  });

  gulp.task('admin:vendor:js', function() {
    return gulp
      .src(config.assets.admin.vendor.scripts)
      .pipe(sourcemaps.init({'loadMaps': true}))
      .pipe(concat(config.public.admin.vendor.scripts))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest(config.public.destJS));
  });

  gulp.task('admin:sass', () => {
    return gulp.src(config.assets.admin.stylesMain)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(config.public.admin.styles))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(rename(config.public.admin.stylesMin))
        .pipe(minify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destCSS))
  });

  gulp.task('admin:vendor:sass', () => {
    return gulp.src(config.assets.admin.vendor.stylesMain)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(sass({
            includePaths: config.assets.admin.vendor.styles //Specify vendor styles here
        }).on('error', sass.logError))
        .pipe(rename(config.public.admin.vendor.styles))
        .pipe(gulp.dest(config.public.destCSS))
        .pipe(rename(config.public.admin.vendor.stylesMin))
        .pipe(minify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.public.destCSS))
  });


gulp.task('build:frontend', ['images', 'frontend:sass', 'frontend:js']);
gulp.task('build:admin', ['admin:sass', 'admin:js']);

gulp.task('sync:frontend', ['admin:sass', 'admin:js']);

gulp.task('prep:frontend', ['images', 'frontend:vendor:sass', 'frontend:vendor:js']);
gulp.task('prep:admin', ['images', 'admin:vendor:sass', 'admin:vendor:js']);

gulp.task('default', ['prep:frontend', 'build:frontend']);  


gulp.task('watch', ['build:frontend'], () => {
  gulp.watch([config.assets.frontend.styles], ['frontend:sass']);
  gulp.watch([config.assets.frontend.scripts], ['frontend:js']);
});

gulp.task('watch:sync', ['sync:frontend'], () => {
    gulp.watch([config.assets.frontend.styles], ['frontend:sync:sass']);
    gulp.watch([config.assets.frontend.scripts], ['frontend:sync:js']);
});
  
gulp.task('watch:global', ['build:frontend', 'build:admin'], () => {
    gulp.watch([config.assets.frontend.styles], ['frontend:sync:sass']);
    gulp.watch([config.assets.frontend.scripts], ['frontend:sync:js']);
});