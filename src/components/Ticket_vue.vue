<template>
    <div class="Ticket_vue">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des Tickets Générer</h1>
       <div class="container">
           <div class="row">
               <div class="col-xs-12 col-lg-10 col-lg-push-0">
                     <div class="box">
            <div class="box-header">
              
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Prix</th>
                  <th>Status</th>
                  <th>Type_du_Ticket</th>
                  <th>Evènement Lier</th>
                  <th>Code Du Ticket</th>
                  <th>Modification</th>
                  <th>Supression</th>
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in Ticket_vue" :key="item.id">
                  <td>{{item.id}}</td>
                  <td >{{item.prix}}</td>
                  <td >{{item.statut}}</td>
                  <td >{{item.typeTicket.libelle}}</td>
                  <td >{{item.event.libelle}}</td>
                  <td >***{{item.code}}</td>
                <th><router-link :to="{name:'UpdateTicket', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th>
                  <td><button v-on:click="DeleteTicket(item.id)" class="btn btn-danger">Supprimer</button></td>
                </tr>
                
                </tbody>
               
              </table>
            </div>
            <!-- /.box-body -->
          </div>
               </div>
           </div>
       </div>

</div>
    </div>
</template>

<script>

export default {
  name: 'Ticket_vue',
  data () {
    return {
        Ticket_vue: []
    }
  },
  methods: {
      FetchTicket() {
        this.$http.get('http://192.168.1.100:3333/ticket/index')
            .then(function(response){
              this.Ticket_vue = response.body.data
               console.log(response.body.data)
          });
      },
    DeleteTicket(id){
        this.$http.get('http://192.168.1.100:3333/ticket/delete/'+id)
            .then(function(response){
              this.Ticket_vue = response.body.data
              //  this.$router.push({path:'/'});
               location.reload()
          });
    }

  },
  created: function() {
    this.FetchTicket(this.$route.params.id);
  }
}

</script>
