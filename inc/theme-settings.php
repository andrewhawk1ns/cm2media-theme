<?php
/**
 * Check and setup theme's default settings
 *
 * @package cm2theme
 *
 */

if ( ! function_exists( 'setup_theme_default_settings' ) ) :
	function setup_theme_default_settings() {

		// check if settings are set, if not set defaults.
		// Caution: DO NOT check existence using === always check with == .
		// Latest blog posts style.
		$cm2theme_posts_index_style = get_theme_mod( 'cm2theme_posts_index_style' );
		if ( '' == $cm2theme_posts_index_style ) {
			set_theme_mod( 'cm2theme_posts_index_style', 'default' );
		}

		// Sidebar position.
		$cm2theme_sidebar_position = get_theme_mod( 'cm2theme_sidebar_position' );
		if ( '' == $cm2theme_sidebar_position ) {
			set_theme_mod( 'cm2theme_sidebar_position', 'right' );
		}

		// Container width.
		$cm2theme_container_type = get_theme_mod( 'cm2theme_container_type' );
		if ( '' == $cm2theme_container_type ) {
			set_theme_mod( 'cm2theme_container_type', 'container' );
		}
	}
endif;
