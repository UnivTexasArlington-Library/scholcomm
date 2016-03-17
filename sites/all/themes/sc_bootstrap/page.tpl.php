<nav class="navbar  header-navbar   ">
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
      <div class="hidden-xs box "></div>
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
    

<body>
<!--   <?php print render($title_prefix); ?>
  <?php if (!empty($title)): ?>
    <h1 class="page-header"><?php print $title; ?></h1> 
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
  <?php endif; ?>  -->
    


    <!-- JUMBOTRON/HIGHLIGHTED -->
    
    <div class="row">
    <?php print $messages; ?>
    <?php if (!empty($page['sidebar_first'])): ?>
    <div class="col-md-3">
      <?php print render($page['sidebar_first']); ?>
    </div>
    <?php endif; ?>

    <!-- <div class="col-md-9 col-md-offset-1"> -->
      <section<?php print $content_column_class; ?>>
        
          <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
          <a id="main-content"></a>
          <?php print render($title_prefix); ?>
          <?php if (!empty($title)): ?>
            <h1 class="page-header"><?php print $title; ?></h1>
          <?php endif; ?>
          <?php print render($title_suffix); ?>
          
          <?php if (!empty($tabs)): ?>
            <?php print render($tabs); ?>
          <?php endif; ?>
          <?php if (!empty($page['help'])): ?>
            <?php print render($page['help']); ?>
          <?php endif; ?>
          <?php if (!empty($action_links)): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>
          <?php print render($page['content']); ?>
        
      </section>
      <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>
  </div>
</body>
<footer class="footer container-fluid">
  <?php print render($page['footer']); ?>
</footer>