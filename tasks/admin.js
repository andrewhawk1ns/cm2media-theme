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
