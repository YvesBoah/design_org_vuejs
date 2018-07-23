<template>
    <div class="list_vendeur">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des Vendeurs</h1>
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
                  <th>Nom</th>
                  <th>email</th>
                  <th>Telephone</th> 
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in list_vendeur" :key="item.id">
                  <td>{{item.id}}</td>
                  <td >{{item.nom}}</td>
                  <td >{{item.email}}</td>
                  <td >{{item.tel}}</td>
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
  name: 'list_vendeur',
  data () {
    return {
        list_vendeur: []
    }
  },
  methods: {
      fetchEvent() {
        this.$http.get('http://6bc1bde1.ngrok.io/vendeur/index')
            .then(function(response){
              this.list_vendeur = response.body.data
               console.log(response.body.data)
          });
      },
    // DeleteEvent(id){
    //     this.$http.get('http://6bc1bde1.ngrok.io/event/delete/'+id)
    //         .then(function(response){
    //          // on filtre les éléments pour lesquelles l'id est differents de ce qui est present
    //           this.list_vendeur = this.list_vendeur.filter((elt)=>{
    //             return  elt.id != id
    //           })
    //           //  this.$router.push({path:'/'});
    //           //  location.reload()
    //       });
    // }

  },
  created: function() {
    this.fetchEvent(this.$route.params.id);
  }
}

</script>