<?php

/**
 * @file
 * template.php
 */
drupal_add_js(drupal_get_path('theme', 'sc_bootstrap'));


// function sc_bootstrap_subtheme_preprocess_html(&$variables) {
//   $options = array(
//     'group' => JS_THEME,
//   );
//   drupal_add_js(drupal_get_path('theme', 'sc_bootstrap'). '/js/menu-anim.js', $options);
// }

//adding class to OA Mandates menu
function bootstrap_menu_tree__menu_oa_mandates(&$variables) {
  return '<ul class="menu nav nav-pills nav-stacked">' . $variables['tree'] . '</ul>';
}