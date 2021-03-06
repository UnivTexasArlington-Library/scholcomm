<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>
<nav class="navbar header-navbar">
<div class="container-fluid navbar-default blue" > <!-- EDITED-->
  <div class="row blue title navbar-header">

    <div class="col-lg-1 col-md-2 col-sm-2 hidden-xs logo" >
      <div class="navbar-header pull-right">
          <?php if ($logo): ?>
        <a class="navbar-btn" href="http://library.uta.edu/" title="University of Texas at Arlington Libraries">
          <img src="<?php print $logo; ?>" alt="University of Texas at Arlington Libraries" class="center-block" id="uta-logo" />
        </a>
        <?php endif; ?>
      </div>
    </div>
    <div class="col-lg-10 col-md-8 col-sm-8 col-xs-12 site-name">
      <div class="center-block">
        <?php if (!empty($site_name)): ?>
        <a class="navbar-brand title-block" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
        <?php endif; ?>
      </div>
    <!--  <div class="navbar-header"> -->
          <button type="button" class="navbar-toggle menu-toggle-buttton" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
        <!-- </div>  -->
    </div>
  </div>
</div>
     
      <!-- seperator between header and menu -->
      <div class=" box "></div>
    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      
      <div class="nav-collapse collapse nav-content" id="nav-menu"><!-- navbar , appears in larger screens -->
        <nav role="navigation" class="">
          <ul class="nav nav-pills nav-justified main-menu"> 
            <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
            <?php endif; ?>
            <?php if (!empty($secondary_nav)): ?>
            <?php print render($secondary_nav); ?>
            <?php endif; ?>
            <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>
          </ul>
          <?php endif; ?>
        </nav>
      </div> <!-- /.nav-collapse .collapse-->
    
    </nav> <!--/header-navbar-->
    <?php endif; ?>
  </div> <!-- /.container-fluid -->
    


  <?php print render($title_prefix); ?>
  <?php if (!empty($title)): ?>
  <!--  <h1 class="page-header"><?php print $title; ?></h1> -->
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $messages; ?>
  <?php if (!empty($tabs)): ?>
  <?php print render($tabs); ?>
  <?php endif; ?>
  <?php if (!empty($page['help'])): ?>
  <?php print render($page['help']); ?>
  <?php endif; ?>
  <?php if (!empty($action_links)): ?>
  <ul class="action-links"><?php print render($action_links); ?></ul>
  <?php endif; ?>
    
    <!-- JUMBOTRON/HIGHLIGHTED -->
    
  <div class="jumbotron" id="blackboard">
    <div class="container" > <!--BACKGROUND IMAGE HERE -->
      <div class="row">
        <?php if (!empty($page['highlighted'])): ?>
        <div class="col-md-4 col-md-offset-8 col-sm-6 col-sm-offset-6  col-md-5 col-xs-offset-5 jumbotron-img">
          <?php print render($page['highlighted']); ?>
        </div> <!-- /.col-md-4 /.col-md-offset-8 -->
      </div> <!-- /.row -->
    </div> <!-- /. container -->
  </div> <!-- /.jumbotron -->
  <?php endif; ?>
          
    <!--LEFT/MIDDLE/RIGHT-->
      <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-sm-4">
        <?php print render($page['left']); ?>
      </div> <!-- /col-4 -->
               
      <div class="col-md-4 col-sm-4">
        <?php print render($page['middle']); ?>
      </div> <!-- /col-4 -->
            
      <div class="col-md-4 col-sm-4">
        <?php print render($page['right']); ?>
      </div> <!-- /col-4 -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid (END OF LEFT/MIDDLE/RIGHT) -->

<footer class="footer container-fluid">
  <?php print render($page['footer']); ?>
</footer>