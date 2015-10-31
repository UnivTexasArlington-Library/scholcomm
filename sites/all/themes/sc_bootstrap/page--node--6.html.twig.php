<div class="container-fluid">
  <div class="row blue">
    <div class="col-md-2 col-sm-2 hidden-xs logo">
      <div class="navbar-header pull-right">
        <?php if ($logo): ?>
        <a class="navbar-btn" href="http://library.uta.edu/" title="University of Texas at Arlington Libraries">
          <img src="<?php print $logo; ?>" alt="University of Texas at Arlington Libraries" class="center-block"/>
        </a>
        <?php endif; ?>
      </div>
    </div>
    <div class="col-md-9 col-sm-9 col-xs-12 site-name">
      <div class="center-block">
        <?php if (!empty($site_name)): ?>
        <a class="navbar-brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
<nav class="navbar">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div> <!-- /.navbar-header -->
      </div> <!-- /.container-fluid -->
  
    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="navbar-collapse collapse">
        <nav role="navigation">
          <ul class"nav nav-pills nav-justified">
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
      </div> <!-- /.navbar-collapse .collapse-->
    
    </nav>
    <?php endif; ?>
  </div> <!-- /.container-fluid -->
    

<body>
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
    
  <div class="row">
    <?php if (!empty($page['sidebar_first'])): ?>
    <div class="col-md-5">
      <?php print render($page['sidebar_first']); ?>
    </div>
    <?php endif; ?>

    <div class="col-md-7">
      <section<?php print $content_column_class; ?>>
        <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
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
        <?php endif; ?>
        <?php print render($page['content']); ?>
      </section>
    </div>
  </div>
</body>
<footer class="footer container-fluid">
  <?php print render($page['footer']); ?>
</footer>