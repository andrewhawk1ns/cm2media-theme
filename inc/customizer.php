<?php
/**
 * Cm2 Theme Theme Customizer
 *
 * @package cm2theme
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
if ( ! function_exists( 'cm2theme_customize_register' ) ) {
	/**
	 * Register basic customizer support.
	 *
	 * @param object $wp_customize Customizer reference.
	 */
	function cm2theme_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	}
}
add_action( 'customize_register', 'cm2theme_customize_register' );

if ( ! function_exists( 'cm2theme_theme_customize_register' ) ) {
	/**
	 * Register individual settings through customizer's API.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer reference.
	 */
	function cm2theme_theme_customize_register( $wp_customize ) {

		// Theme layout settings.
		$wp_customize->add_section( 'cm2theme_theme_layout_options', array(
			'title'       => __( 'Theme Layout Settings', 'cm2theme' ),
			'capability'  => 'edit_theme_options',
			'description' => __( 'Container width and sidebar defaults', 'cm2theme' ),
			'priority'    => 160,
		) );

		$wp_customize->add_setting( 'cm2theme_container_type', array(
			'default'           => 'container',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_textarea',
			'capability'        => 'edit_theme_options',
		) );

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'container_type', array(
					'label'       => __( 'Container Width', 'cm2theme' ),
					'description' => __( "Choose between Bootstrap's container and container-fluid", 'cm2theme' ),
					'section'     => 'cm2theme_theme_layout_options',
					'settings'    => 'cm2theme_container_type',
					'type'        => 'select',
					'choices'     => array(
						'container'       => __( 'Fixed width container', 'cm2theme' ),
						'container-fluid' => __( 'Full width container', 'cm2theme' ),
					),
					'priority'    => '10',
				)
			) );

		$wp_customize->add_setting( 'cm2theme_sidebar_position', array(
			'default'           => 'right',
			'type'              => 'theme_mod',
			'sanitize_callback' => 'esc_textarea',
			'capability'        => 'edit_theme_options',
		) );

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'cm2theme_sidebar_position', array(
					'label'       => __( 'Sidebar Positioning', 'cm2theme' ),
					'description' => __( "Set sidebar's default position. Can either be: right, left, both or none. Note: this can be overridden on individual pages.",
					'cm2theme' ),
					'section'     => 'cm2theme_theme_layout_options',
					'settings'    => 'cm2theme_sidebar_position',
					'type'        => 'select',
					'choices'     => array(
						'right' => __( 'Right sidebar', 'cm2theme' ),
						'left'  => __( 'Left sidebar', 'cm2theme' ),
						'both'  => __( 'Left & Right sidebars', 'cm2theme' ),
						'none'  => __( 'No sidebar', 'cm2theme' ),
					),
					'priority'    => '20',
				)
			) );
	}
} // endif function_exists( 'cm2theme_theme_customize_register' ).
add_action( 'customize_register', 'cm2theme_theme_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
if ( ! function_exists( 'cm2theme_customize_preview_js' ) ) {
	/**
	 * Setup JS integration for live previewing.
	 */
	function cm2theme_customize_preview_js() {
		wp_enqueue_script( 'cm2theme_customizer', get_template_directory_uri() . '/js/customizer.js',
			array( 'customize-preview' ), '20130508', true );
	}
}
add_action( 'customize_preview_init', 'cm2theme_customize_preview_js' );
