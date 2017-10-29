gulp.task( 'browser-sync', function() {
    browsersync.init( {
      proxy: config.browsersync.projectURL,
      open: true,
      injectChanges: true,
    } );
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
 * Admin Live Reload
 */

gulp.task('admin:sync:sass', () => {
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

  gulp.task('admin:sync:js', () => {
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