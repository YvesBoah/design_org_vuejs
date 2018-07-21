<template>
    <div class="MainLogin">
        

            <div class="login-box">
  <div class="login-logo">
    <a href=""><b>BUZZ EVENT</b> </a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Se Connecter</p>

    <form v-on:submit.prevent="Login">
      <div class="form-group has-feedback">
        <input type="email" v-model="MainLogin.email" name="email" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" v-model="MainLogin.password" name="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
     
    <div class="social-auth-links text-center">
      <button type="submit" class="btn btn-block text-center  btn-facebook btn-flat"> Me Connecter</button>
    </div>
  
    </form>


    <a href="#">Rappel Moi Mon Mot De Passe </a><br>
  

  </div>
  <!-- /.login-box-body -->
</div>

<div class="col-xs-12 col-lg-6 col-lg-push-3" id="descent">
    <div class="well well-sm">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright &copy; 2018-2019 <a href="">Invovation Foundation</a>.</strong> All rights reserved.
    </div>
  
</div>
    </div>
</template>

<script>
export default {
  name: 'MainLogin',
  data () {
    return {
        MainLogin: {}
    }
  },
  methods: {
      Login(e){
          if (!this.MainLogin.password  || !this.MainLogin.email) {
              console.log('veuillez remplir les champs svp');
          } else {
              let Connecte_moi = {
                  email : this.MainLogin.email,
                  password : this.MainLogin.password
              }

              this.$http.post('http://192.168.1.103:3333/user/login',Connecte_moi)
              .then(function(response){
                
                if (response.body.token) {
                  this.$router.push({path: '/'});
                } 
                else {
                    alert('erreur');
                }
              });

              
        
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  }
}
</script>

<style>
 body{   
background-image: url("../../../static/image/buzz.jpg");
} 
</style>
