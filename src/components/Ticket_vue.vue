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
                  <th>Code Du Ticket</th>
                  <!-- <th>Modification</th>
                  <th>Supression</th> -->
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in Ticket_vue" :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.prix}}</td>
                  <td>{{item.statut}}</td>
                  <td>{{item.code}}</td>
                <!-- <th><router-link :to="{name:'UpdateTicket', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th>
                  <td><button v-on:click="DeleteTicket(item.id)" class="btn btn-danger">Supprimer</button></td> -->
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
      FetchTicket(id) {
        this.$http.get('http://6bc1bde1.ngrok.io/event/'+id+'/ticket')
            .then(function(response){
              this.Ticket_vue = response.body.data.tickets
               console.log(response.body.data.tickets)
               
          });
      },
    DeleteTicket(id){
        this.$http.get('http://6bc1bde1.ngrok.io/ticket/delete/'+id)
            .then(function(response){
              console.log(response)
              // this.Ticket_vue = response.body.data
               this.Ticket_vue = this.Ticket_vue.filter((elt)=>{
                return  elt.id != id
              })
              //  this.$router.push({path:'/'});
              //  location.reload()
          });
    }

  },
  created: function() {
    this.FetchTicket(this.$route.params.id);
  }
}

</script>
