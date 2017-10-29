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

