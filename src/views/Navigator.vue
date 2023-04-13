<template>
    <div id="nav">
         <router-link to="/">Home</router-link> !
         <router-link to="/login">Login</router-link> ! 
         <router-link to="/products">Products</router-link> ! 
         <router-link to="/new-product">NEW PRODUCT</router-link> !
         <span style="float:right;">
         </span>
    </div>

</template>
<script>
export default {
 name: 'navigatorView',
 data (){
   return {
     
   }
 },
 computed : {

 },
 methods : {
 
 },
 components: {
 //  'profile-detail-component' : ProfileDetailComponent,
 //  'profile-component' : ProfileComponent 
 }
}
</script>
