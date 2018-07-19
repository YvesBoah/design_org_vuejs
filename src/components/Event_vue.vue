<template>
    <div class="Event_vue">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des évènements en cours</h1>
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
                  <th>Libellé</th>
                  <th>description</th>
                  <th>Lieu</th>
                  <th>date_debut</th>
                  <th>date_fin</th>
                  <th>Type</th>
                  <th>Modification</th>
                  <th>Suppression</th>
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in VueEvents" :key="item.id">
                  <td>{{item.id}}</td>
                  <td >{{item.libelle}}</td>
                  <td >{{item.description}}</td>
                  <td >{{item.lieu}}</td>
                  <td >{{item.date_debut}}</td>
                  <td >{{item.date_fin}}</td>
                  <td >{{item.type}}</td>
                <th><router-link :to="{name:'EventModify', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th>
                  <td><button v-on:click="DeleteEvent(item.id)" class="btn btn-danger">Supprimer</button></td>
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
  name: 'Event_vue',
  data () {
    return {
        VueEvents: []
    }
  },
  methods: {
      fetchEvent() {
        this.$http.get('http://192.168.1.100:3333/event/index')
            .then(function(response){
              this.VueEvents = response.body.data
               console.log(response.body.data)
          });
      },
    DeleteEvent(id){
        this.$http.get('http://192.168.1.100:3333/event/delete/'+id)
            .then(function(response){
              this.VueEvents = response.body.data
              //  this.$router.push({path:'/'});
               location.reload()
          });
    }

  },
  created: function() {
    this.fetchEvent(this.$route.params.id);
  }
}

</script>