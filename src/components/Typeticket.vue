<template>
    <div class="Typeticket">
      <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Créer Un Nouveau Type De Tycket</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="CreateTicket">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text" name="libelle" v-model="TicketCreate.libelle" class="form-control" placeholder="Libellé Type Tickets">
                  </div>
                </div>

 
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Créer Un Type d'évènement</button>
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
  name: 'Typeticket',
  data () {
    return {
        TicketCreate: {}
    }
  },
  methods: {
      CreateTicket(e){
          if (!this.TicketCreate.libelle) {
              console.log('veuillez remplir les champs svp');
          } else {
              let createNewTicket = {
                  libelle : this.TicketCreate.libelle    
              }

              this.$http.post('http://192.168.1.100:3333/typeTicket/create',createNewTicket)
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