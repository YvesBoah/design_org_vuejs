<template>
    <div class="Profil">
       
        <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Mettre à Jour Mon Profil</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateProfil">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Nom</label>

                  <div class="col-sm-10">
                    <input type="text" name="nom" v-model="ProfilSubmit.nom" class="form-control" placeholder="Nom">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Prenom</label>

                  <div class="col-sm-10">
                    <input type="text" v-model="ProfilSubmit.prenom" class="form-control" name="prenom"  placeholder="Addresse">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Mot de passe</label>

                  <div class="col-sm-10">
                    <input type="password" name="password" v-model="ProfilSubmit.password" class="form-control"  placeholder="Mot de passe">
                  </div>
                </div>


                <div class="form-group">
                <label class="col-sm-2 ">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <input type="text" name="tel" class="form-control" v-model="ProfilSubmit.tel" data-inputmask='"mask": "99999999"' data-mask>
                </div>
                </div>
                <!-- /.input group -->
              </div>

            
               

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Mettre à Jour</button>
              </div>
              <!-- /.box-footer -->
            </form>
              </div>
          </div>
      </div>
   
    </div>
    <router-view/>

    </div>
</template>


<script>
export default {
  name: 'Profil',
  data () {
    return {
        ProfilSubmit: {}
    }
  },
  methods: {
      UpdateProfil(e){
          if (this.ProfilSubmit.prenom =='' || !this.ProfilSubmit.nom || !this.ProfilSubmit.tel) {
              console.log('veuillez remplir les champs svp');
          } else {
              let mise_a_jour_Profil = {
                  nom : this.ProfilSubmit.nom,
                  prenom : this.ProfilSubmit.prenom,
                  tel : this.ProfilSubmit.tel,
                  password : this.ProfilSubmit.password      
              }

              this.$http.post('http://192.168.1.103:3333/',mise_a_jour_Profil)
              .then(function(response){
                  this.$router.push({path: '/'});
              });

              
              console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  }
}
</script>