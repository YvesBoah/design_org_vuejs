<template>
    <div class="Ticket">
      
         <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création de Ticket</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="addTicket">

              <div class="box-body">

                <div class="form-group">
                  <label  class="col-sm-2 control-label">Quantité</label>

                  <div class="col-sm-10">
                    <input type="number" v-model="Ticket.qte" name="qte" class="form-control" placeholder="Nombre de ticket">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Pix Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.prix" name="prix" class="form-control select2" style="width: 100%;">
                  <option value="5000" selected="selected">5000 FCFA</option>
                  <option value="10000">15000 FCFA</option>
                  <option value="10000">20000 FCFA</option>
                  <option value="10000">25000 FCFA</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Status</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.statut" name="statut" class="form-control select2" style="width: 100%;">
                  <option value="En attentes" selected="selected"> En attentes</option>
                  <option value="Actif">Actif</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Type Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.type_ticket_id" name="type_ticket_id" class="form-control select2" style="width: 100%;">
                  <option v-for="items in TypeLier" :key="items.id" selected="selected" v-bind:value="items.id">{{items.libelle}}</option>
                </select>
              </div>
                </div>
<!--                
               <div class="form-group">
                <label class="col-sm-2 ">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <input type="text" class="form-control" data-inputmask='"mask": "99999999"' data-mask>
                </div>
                </div>
              </div> -->
              <!-- /.form group -->

  <!-- content -->

                <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                <div class="col-sm-10">
                <select v-model="Ticket.event_id" name="event_id" class="form-control select2" style="width: 100%;">
                  <option  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{item.libelle}}</option> 
                </select>
              </div>
              </div>

      

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Générer  Le Ticket</button>
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
  name: 'Ticket',
  data () {
    return {
        Ticket: {},
        eventLier: [],
        TypeLier: []
    }
  },
  methods: {
      addTicket(e){
          if (1==0) {
              alert('veuillez remplir les champs svp');
          } else {
              let newTicket = {
                  qte : this.Ticket.qte,
                  event_id : this.Ticket.event_id,
                  statut : this.Ticket.statut,
                  type_ticket_id : this.Ticket.type_ticket_id,
                  prix : this.Ticket.prix
              }

              this.$http.post('http://192.168.1.100:3333/ticket/create',newTicket)
              .then(function(response){
                console.log(response);
                  // this.$router.push({path: '/'});
                  // if (response.msg != 'ok'){
                  //   alert('ERREUR');
                  // }
              });

              
              console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchEventLier() {
        this.$http.get('http://192.168.1.100:3333/event/index')
            .then(function(response){
              // this.eventLier = response.body.data.libelle
              this.eventLier = response.body.data
               console.log(response.body.data)
          })
      },
      fetchTypeLier() {
        this.$http.get('http://192.168.1.100:3333/typeTicket/index')
            .then(function(response){
              //this.TypeLier = response.body.data.type
              this.TypeLier = response.body.data
               console.log(response.body.data)
          })
      }
  },
  created: function() {
    this.fetchEventLier();
    this.fetchTypeLier();
  }
}

</script>