<?php
/**
 * Cm2 Theme functions and definitions
 *
 * @package cm2theme
 */


/**
 * Theme setup and custom theme supports.
 */
require get_template_directory() . '/inc/setup.php';
/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
require get_template_directory() . '/inc/widgets.php';
/**
 * Load functions to secure your WP install.
 */
require get_template_directory() . '/inc/security.php';
/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/inc/enqueue.php';
/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';
/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/pagination.php';
/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';
/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
/**
 * Custom comments file.
 */
require get_template_directory() . '/inc/custom-comments.php';
/**
 * Load custom WordPress nav walker.
 */
require get_template_directory() . '/inc/bs4navwalker.php';
/**
 * Load editor functions.
 */
require get_template_directory() . '/inc/editor.php';
/**
 * Google Analytics.
 */
//require get_template_directory() . '/inc/google-analytics.php';
/**
 * Custom post types.
 */
//require get_template_directory() . '/inc/custom-post-types.php';
/**
 * Custom post taxonomies.
 */
//require get_template_directory() . '/inc/custom-taxonomies.php';
?>