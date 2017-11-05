<?php
/**
 * Sidebar setup for footer full.
 *
 * @package cm2theme
 */

$container   = get_theme_mod( 'cm2theme_container_type' );

?>

<?php if ( is_active_sidebar( 'footer' ) ) : ?>

	<!-- ******************* The Footer Full-width Widget Area ******************* -->

	<div class="wrapper" id="wrapper-footer">

		<div class="<?php echo esc_attr( $container ); ?>" id="footer-content" tabindex="-1">

			<div class="row">

				<?php dynamic_sidebar( 'footer' ); ?>

			</div>

		</div>

	</div><!-- #wrapper-footer -->

<?php endif; ?>
