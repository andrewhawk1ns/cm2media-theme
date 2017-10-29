
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