<?php


/**
 * Creates the staff custom post type.
 */


function staff_post_type() {
	
	
	$labels = array(
	'name'                => _x( 'Staff', 'Post Type General Name', 'cm2theme' ),
	'singular_name'       => _x( 'Staff Member', 'Post Type Singular Name', 'cm2theme' ),
	'menu_name'           => __( 'Staff', 'cm2theme' ),
	'parent_item_colon'   => __( 'Parent Staff Member', 'cm2theme' ),
	'all_items'           => __( 'All Staff', 'cm2theme' ),
	'view_item'           => __( 'View Staff Member', 'cm2theme' ),
	'add_new_item'        => __( 'Add New Staff Member', 'cm2theme' ),
	'add_new'             => __( 'Add New', 'cm2theme' ),
	'edit_item'           => __( 'Edit Staff Member', 'cm2theme' ),
	'update_item'         => __( 'Update Staff Member', 'cm2theme' ),
	'search_items'        => __( 'Search Staff Member', 'cm2theme' ),
	'not_found'           => __( 'Not Found', 'cm2theme' ),
	'not_found_in_trash'  => __( 'Not found in Trash', 'cm2theme' ),
	);
	
	
	$args = array(
	'label'               => __( 'staff', 'cm2theme' ),
	'description'         => __( 'Cm2 Media Theme Staff Members', 'cm2theme' ),
	'labels'              => $labels,
	'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'hierarchical'        => false,
	'public'              => true,
	'show_ui'             => true,
	'show_in_menu'        => true,
	'show_in_nav_menus'   => true,
	'show_in_admin_bar'   => true,
	'menu_position'       => 5,
	'menu_icon' => 'dashicons-businessman',
	'can_export'          => true,
	'has_archive'         => true,
	'exclude_from_search' => false,
	'publicly_queryable'  => true,
	'capability_type'     => 'post',
	);
	
	
	register_post_type( 'staff', $args );
	
	
}
 


/**
 * Creates the service custom post type.
 */


function service_post_type() {
	
	
	$labels = array(
	'name'                => _x( 'Services', 'Post Type General Name', 'cm2theme' ),
	'singular_name'       => _x( 'Service', 'Post Type Singular Name', 'cm2theme' ),
	'menu_name'           => __( 'Services', 'cm2theme' ),
	'parent_item_colon'   => __( 'Parent Service ', 'cm2theme' ),
	'all_items'           => __( 'All Service', 'cm2theme' ),
	'view_item'           => __( 'View Service ', 'cm2theme' ),
	'add_new_item'        => __( 'Add New Service ', 'cm2theme' ),
	'add_new'             => __( 'Add New', 'cm2theme' ),
	'edit_item'           => __( 'Edit Service ', 'cm2theme' ),
	'update_item'         => __( 'Update Service ', 'cm2theme' ),
	'search_items'        => __( 'Search Service ', 'cm2theme' ),
	'not_found'           => __( 'Not Found', 'cm2theme' ),
	'not_found_in_trash'  => __( 'Not found in Trash', 'cm2theme' ),
	);
	
	
	$args = array(
	'label'               => __( 'service', 'cm2theme' ),
	'description'         => __( 'Cm2 Media Theme Services', 'cm2theme' ),
	'labels'              => $labels,
	'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
	'hierarchical'        => false,
	'public'              => true,
	'show_ui'             => true,
	'show_in_menu'        => true,
	'show_in_nav_menus'   => true,
	'show_in_admin_bar'   => true,
	'menu_position'       => 5,
	'menu_icon' => 'dashicons-clipboard',
	'can_export'          => true,
	'has_archive'         => true,
	'exclude_from_search' => false,
	'publicly_queryable'  => true,
	'capability_type'     => 'post',
	);
	
	
	register_post_type( 'service', $args );
	
	
}


add_action( 'init', 'staff_post_type', 0 );

add_action( 'init', 'service_post_type', 0 );
