<?php

function google_analytics(){
    
        ?>
              <!-- Start Google Analytics Script -->
              <!-- Global Site Tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106609728-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}; 
                gtag('js', new Date());
              
                gtag('config', 'UA-106609728-1');
              </script>
              <!-- End Google Analytics Script -->
    <?php 
    }
    
    if ( !current_user_can( 'manage_options' ) )  add_action('wp_head', 'google_analytics');