<?php


/**
 * Creates the service category taxonomy.
 */


function service_taxonomy() {
	
	
	
	$labels = array(
	'name' => _x( 'Service Categories', 'Taxonomy General Name', 'cm2theme' ),
	'singular_name' => _x( 'Service Category', 'Taxonomy Singular Name', 'cm2theme' ),
	'search_items' =>  __( 'Search Service Categories', 'cm2theme' ),
	'all_items' => __( 'All Service Categories', 'cm2theme' ),
	'parent_item' => __( 'Parent Service Category', 'cm2theme' ),
	'parent_item_colon' => __( 'Parent Service Category:', 'cm2theme' ),
	'edit_item' => __( 'Edit Service Category', 'cm2theme' ), 
	'update_item' => __( 'Update Service Category', 'cm2theme' ),
	'add_new_item' => __( 'Add New Service Category', 'cm2theme' ),
	'new_item_name' => __( 'New Service Category', 'cm2theme' ),
	'menu_name' => __( 'Service Categories', 'cm2theme' ),
	);
	
	
	
	register_taxonomy(
	'service-categories', array('service'), array(
	'hierarchical' => true,
	'labels' => $labels,
	'show_ui' => true,
	'show_admin_column' => true,
	'query_var' => true,
	'rewrite' => array( 'slug' => 'service-category' ),
	));
	
	
	
}



add_action( 'init', 'service_taxonomy', 0 );



?>