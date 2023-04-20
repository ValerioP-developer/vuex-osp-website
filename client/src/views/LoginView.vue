<template>
    <div class="container">
    <h1>Helloooo{{getUsername}}</h1>
    <div class="row">
        <div class="col-6">  
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model= "loginForm.username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp"    class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"  v-model= "loginForm.password"  class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button  v-on:click="getLogin"   type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
</div>
    
</template>
  
<script>


import { mapActions,mapGetters } from 'vuex';

export default{
  name: 'LoginView',
  data(){
     return {
        loginForm:{
            username:null,
            password:null
        }
     }
  },
  computed : {
    ...mapGetters({
        'getUsername' : 'profile/getUsername'
    })
  },

  methods:{
    ...mapActions({  'actionProfile': 'profile/actionProfile'} ),
    getLogin(){
       //   console.log("Get call called", this.loginForm);
          this.actionProfile(this.loginForm);
    }
  }
  
}
</script>
<style>

</style>