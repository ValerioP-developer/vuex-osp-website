<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <div v-if="route == 'home'">
          <H1>
            {{ getMainHomeText }}
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


        <h4>Welcomee to my Blog!</h4>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a
          jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
        </p>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a
          jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
        </p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        <button @click="currentRouteName">click</button>

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

<style></style>
