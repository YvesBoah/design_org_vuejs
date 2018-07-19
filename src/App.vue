<template>
  <div id="app">
      
    <header class="main-header">
  
      <!-- Logo -->
     <router-link class="logo" :to="{name:'HelloWorld'}">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Buzz </b> Event</span>
      </router-link>
  
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
           
        
            
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="static/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">Alexander Pierce</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
  
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">Profile</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
  
      </nav>
    </header>



        <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel" id="bas">
          <div class="pull-left image">
            <img src="static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
           </div>
        </div>
        <!-- search form -->
        <!-- <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form> -->
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">Consulte La Liste</li>
          <li class="active treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>Menu De Navigation</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
              <li class="active"><router-link :to="{name:'HelloWorld'}"><i class="fa fa-circle-o"></i>Acceuil</router-link></li>
              <li><router-link :to="{name:'Eventhot'}"><i class="fa fa-circle-o"></i> Créer Un évènement</router-link></li>
              <li><router-link :to="{name:'Ticket'}"><i class="fa fa-circle-o"></i> Générer un ticket</router-link></li>
              <li><router-link :to="{name:'Profil'}"><i class="fa fa-circle-o"></i> Modifier Son Profil </router-link></li>
              <li><router-link :to="{name:'Typeticket'}"><i class="fa fa-circle-o"></i> Créer Un Nouveau Type </router-link></li>
            </ul>
          </li>

                <li class="active treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>Affichage Du Menu</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
              <li class="active"><router-link :to="{name:'Event_vue'}"><i class="fa fa-circle-o"></i>Liste des évènements</router-link></li>
              <li><router-link :to="{name:'Ticket_vue'}"><i class="fa fa-circle-o"></i> Liste Des tickets Générer</router-link></li>
              <li><router-link :to="{name:'TypeticketVue'}"><i class="fa fa-circle-o"></i> Liste Des types de ticket </router-link></li>
              <li><router-link :to="{name:'Statistique'}"><i class="fa fa-circle-o"></i> Statistique Comptabilité </router-link></li>
            </ul>
          </li>   

          <li>
           <router-link :to="{name:'Vendeur'}">
              <i class="fa fa-th"></i> <span>Créer Un Vendeur</span>
              <small class="label pull-right bg-green">new</small>
            </router-link>
          </li>

          
          

        </ul>   
      </section>
      <!-- /.sidebar -->
    </aside>

       <!-- FIN NAVBAR FIXE -->
    

        
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#bas{
  padding: 10px;
}
</style>
