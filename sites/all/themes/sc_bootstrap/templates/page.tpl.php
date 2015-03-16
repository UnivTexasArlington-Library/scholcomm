<div class="container-fluid">
  <div class="row" id="name">
    <div class="col-md-2 col-sm-2">
      <div id="logo">
      <?php print render($page['university_logo']); ?>
      </div>
    </div>
    <div class="col-md-9 col-sm-9">
      <?php print render($page['site_name']); ?>
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
    
    <!-- MAIN CONTENT -->
  <div class="container" > <!--BACKGROUND IMAGE HERE -->
      <div class="row">
              <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        
        <div class="col-md-4">
          <?php print render($page['sidebar_first']); ?>
        </div>
        <div class="col-md=7">
          <h1 class="page-header"><?php print $title; ?></h1>
            <?php endif; ?>
            <?php print render($title_suffix); ?>
            <?php print render($page['content']); ?>
        </div>
      </div>
  </div> 
</body>
<footer class="footer container">
  <?php print render($page['footer']); ?>
</footer>