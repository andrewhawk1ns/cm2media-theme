<?php
/**
 * Cm2 Theme enqueue scripts
 *
 * @package cm2theme
 */

if ( ! function_exists( 'cm2theme_scripts_frontend' ) ) {

	function cm2theme_scripts_frontend() {

		//Minified Front End Vendor Scripts / Styles

		wp_deregister_script('jquery'); // Remove WordPress version of jQuery.

		wp_enqueue_style('cm2theme-frontend-vendor-styles', get_stylesheet_directory_uri() . '/public/styles/vendor.min.css');
		wp_enqueue_script('cm2theme-frontend-vendor-scripts', get_template_directory_uri() . '/public/scripts/vendor.min.js', array(), true, true);

		//Minified Front End Custom Scripts / Styles

		wp_enqueue_style('cm2theme-frontend-custom-styles', get_stylesheet_directory_uri() . '/public/styles/frontend.min.css');
		wp_enqueue_script('cm2theme-frontend-custom-scripts', get_template_directory_uri() . '/public/scripts/frontend.min.js', array(), true, true);

	}
} 

add_action( 'wp_enqueue_scripts', 'cm2theme_scripts_frontend' );


if ( ! function_exists( 'cm2theme_scripts_admin' ) ) {

	function cm2theme_scripts_admin() {

		wp_deregister_script('jquery'); // Remove WordPress version of jQuery.

		//Minified Admin Vendor Scripts / Styles 

		wp_enqueue_style('cm2theme-admin-vendor-styles', get_stylesheet_directory_uri() . '/public/styles/admin-vendor.min.css');
		wp_enqueue_script('cm2theme-admin-vendor-scripts', get_template_directory_uri() . '/public/scripts/admin-vendor.min.js', array(), true, true);

		//Minified Admin Custom Scripts / Styles

		wp_enqueue_style('cm2theme-admin-custom-styles', get_stylesheet_directory_uri() . '/public/styles/admin.min.css');
		wp_enqueue_script('cm2theme-admin-custom-scripts', get_template_directory_uri() . '/public/scripts/admin.min.js', array(), true, true);

	}
} 

//add_action( 'admin_enqueue_scripts', 'cm2theme_scripts_admin' );


