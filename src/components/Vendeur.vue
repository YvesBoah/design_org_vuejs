<template>
    <div class="Vendeur">
 <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création d'un Vendeur</h1>
              <div class="col-xs-12 col-lg-6 col-lg-push-3">
                    <!-- form start -->
            <form class="form-horizontal">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Pseudo</label>

                  <div class="col-sm-10">
                    <input type="text" name="pseudo" class="form-control" placeholder="Pseudo">
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label">Mot de passe</label>

                  <div class="col-sm-10">
                    <input type="password" class="form-control"  placeholder="Mot de passe">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Addresse</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control"  placeholder="Addresse">
                  </div>
                </div>

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

}
</script>