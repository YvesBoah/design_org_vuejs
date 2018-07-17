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
                  <option value="10000">10000 FCFA</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Status</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.status" name="status" class="form-control select2" style="width: 100%;">
                  <option value="En attentes" selected="selected"> En attentes</option>
                  <option value="Actif">Actif</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Type Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.type_ticket_id" name="type_ticket_id" class="form-control select2" style="width: 100%;">
                  <option value="public" selected="selected">public</option>
                  <option value="privée">privée</option>
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

            
                <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                <div class="col-sm-10">
                <select v-model="Ticket.event_id" name="event_id" class="form-control select2" style="width: 100%;">
                  <option value="" selected="selected">event 1</option>
                  <option value="">event 2</option>
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
        Ticket: {}
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
                  status : this.Ticket.status,
                  type_ticket_id : this.Ticket.type_ticket_id,
                  prix : this.Ticket.prix,
              }

              this.$http.post('http://192.168.1.100:3333/ticket/create',newTicket)
              .then(function(response){
                  // this.$router.push({path: '/'});
              });

              
              alert('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  }
}
</script>