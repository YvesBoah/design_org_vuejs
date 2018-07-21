<template>
    <div class="UpdateTypeTicket">
      <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Mettre à Jour Le Type Du Tycket</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateTicket">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text"  name="libelle" v-model="TicketUpdate.libelle" class="form-control">
                  </div>
                </div>

 
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Modifier Un Type d'évènement</button>
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
  name: 'UpdateTypeTicket',
  data () {
    return {
        TicketUpdate: {libelle:'',id:0}
    }
  },
  methods: {
      UpdateTicket(e){
          if (!this.TicketUpdate.libelle) {
              console.log('veuillez remplir les champs svp');
          } else {
              let UpdateThisTicket = {
                  libelle : this.TicketUpdate.libelle    
              }

              this.$http.post('http://192.168.1.103:3333/typeTicket/update/'+this.TicketUpdate.id,UpdateThisTicket)
              .then(function(response){
                  this.$router.push({path: '/'});
              });

              
              console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchType(id) {
        this.$http.get('http://192.168.1.103:3333/typeTicket/edit/'+id)
            .then(function(response){
              this.TicketUpdate.libelle=response.body.data.libelle
              this.TicketUpdate.id=id
               console.log(response.body.data)
          })
      }
  },
  created: function() {
      this.fetchType(this.$route.params.id);
      this.UpdateTicket(this.$route.params.id);
      }
}
</script>