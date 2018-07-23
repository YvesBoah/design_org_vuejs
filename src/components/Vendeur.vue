<template>
    <div class="Vendeur">
 <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création d'un Vendeur</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="addVendor">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">nom</label>

                  <div class="col-sm-10">
                    <input type="text" v-model="Vendeur.nom" name="nom" class="form-control" placeholder="nom">
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label">Email</label>

                  <div class="col-sm-10">
                    <input type="email" v-model="Vendeur.email" class="form-control"  placeholder="Email">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Mot de passe</label>

                  <div class="col-sm-10">
                    <input type="password" v-model="Vendeur.password" class="form-control"  placeholder="Mot de passe">
                  </div>
                </div>

                <div class="form-group">
                <label class="col-sm-2 ">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <input type="number" v-model="Vendeur.tel" name="tel" class="form-control" data-inputmask='"mask": "99999999"' data-mask>
                </div>
                </div>
                <!-- /.input group -->
              </div>

            
               

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Creer Le Vendeur</button>
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
  name: 'Vendeur',
  data () {
    return {
        Vendeur: {}
    }
  },
  methods: {
      addVendor(e){
          if (this.Vendeur.nom =='' || !this.Vendeur.email || !this.Vendeur.tel) {
              console.log('veuillez remplir les champs svp');
          } else {
              let newVendor = {
                  nom : this.Vendeur.nom,
                  email : this.Vendeur.email,
                  tel : this.Vendeur.tel,
                  password : this.Vendeur.password,
              }
//yve atend  ok mon phone vien de s'etein d ok mai relance la requte je vai voi 
              this.$http.post('http://6bc1bde1.ngrok.io/vendeur/register',newVendor)
              .then(function(response){
                  this.$router.push({path: '/'});
              });

              
              console.log('Création reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  }
}
</script>