<template>
  <div id="nav">
    <footer id="sticky-footer" class="flex-shrink-0 py-4  text-white-50">
      <div class="container text-center">
        <router-link to="/">Home</router-link> !
        <!--  <router-link to="/login">Login</router-link> ! -->
        <router-link to="/about">About me</router-link> !
        <router-link :to="{ name: 'blog', params: { refresh: 0 } }">Blog</router-link> !
        <router-link :to="{ name: 'products', params: { refresh: 0 } }">Products</router-link> !
        <!--   <router-link to="/new-product">NEW PRODUCT</router-link> !-->
      </div>
    </footer>

  </div>
</template>
<script>
export default {
  name: 'navigatorView',
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    //  'profile-detail-component' : ProfileDetailComponent,
    //  'profile-component' : ProfileComponent 
  }
}
</script>
