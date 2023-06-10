<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <div v-if="route == 'home'">
          <H1>
            {{ getMainHomeText }} <br>
            {{ getMainHomeText2 }}
          </H1>
        </div>
        <div v-else-if="route == 'product'">
          <H1>
            {{ getMainProductText }}
          </H1>
        </div>
        <div v-else-if="route == 'blog'">
          <H1>
            {{ getMainText }}
          </H1>
        </div>
        <div v-else-if="route == 'about'">
          <img src="images/pvl-logo.jpg" id="profile" alt="logo">
        </div>
        <!--
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        <button @click="currentRouteName">click</button> -->
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TopContainer',
  data() {
    return {
      // route: this.$route.name
    }
  }, methods: {
    currentRouteName() {
      alert(this.route);
    }
  },
  computed: {
    ...mapGetters({
      'getMainText': 'blog/getMainText',
      'getMainHomeText': 'home/getMainText',
      'getMainHomeText2': 'home/getMainText2',
      'getMainProductText': 'product/getMainText',
    })
  },
  props: {
    route: {
      type: String,
      default: 't'
    }
  }
}




</script>

<style>
#profile {
  border-radius: 50%;
  width: 200px;
}
</style>
