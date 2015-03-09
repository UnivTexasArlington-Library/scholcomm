
  <div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      <?php print render($page['university_logo']); ?>
    </div>
    <div class="col-md-8">
      <?php print render($page['site_name']); ?>
    </div>
  </div>
</div>
      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div> <!-- /.navbar-header -->
      </div> <!-- /.container-fluid -->
  
    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="navbar-collapse collapse">
        <nav role="navigation">
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($secondary_nav)): ?>
            <?php print render($secondary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>
          <?php endif; ?>
        </nav>
      </div> <!-- /.navbar-collapse .collapse-->
    
    </nav>
    <?php endif; ?>
  </div> <!-- /.container-fluid -->

<!--<div class="main-container container-fluid"> -->
<!-- REMOVED FOR FRONT PAGE --
  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>

    <?php print render($page['header']); ?>
  </header> <!-- /#page-header -->
  
<!-- REMOVED FOR FRONT PAGE --
    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
   <?php endif; ?>
    

<body>
  <!--  <section<?php print $content_column_class; ?>> -->
  <!-- <a id="main-content"></a> -->
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
    
      <div class="jumbotron">
        <div class="container" id="blackboard"> <!--BACKGROUND IMAGE HERE -->
          <div class="row">
            <?php if (!empty($page['highlighted'])): ?>
            <div class="col-md-4 col-md-offset-8">
              <?php print render($page['highlighted']); ?>
            </div> <!-- /.col-md-4 /.col-md-offset-8 -->
          </div> <!-- /.row -->
        </div> <!-- /. container -->
      </div> <!-- /.jumbotron -->
        <?php endif; ?>
      
    
    </div>
    
    <!--LEFT/MIDDLE/RIGHT-->

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-3">
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
  <!--  </section> -->

<!--</div>  /.main-container /.container -->
</body>
<footer class="footer container">
  <?php print render($page['footer']); ?>
</footer>