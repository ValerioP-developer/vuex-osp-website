<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <div v-if="route == 'home'">
          <span class="txt-top-container">
            {{ getMainHomeText }} <br>
            {{ getMainHomeText2 }}
          </span>
        </div>
        <div v-else-if="route == 'product'">
          <span class="txt-top-container">
            {{ getMainProductText }}
          </span>
        </div>
        <div v-else-if="route == 'blog'">
          <span class="txt-top-container">
            {{ getMainText }}
          </span>
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

.jumbotron {
  background: red;
  height: 800px;
}


/** Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) {
  .jumbotron {
    background: red;
    height: 600px;
  }

  .txt-top-container {
    font-size: 45px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .jumbotron {
    background: red;
    height: 400px;
  }

  .txt-top-container {
    font-size: 35px;
  }
}

@media (min-width: 250px) and (max-width: 575.99px) {
  .jumbotron {
    background: red;
    height: 400px;
  }

  .txt-top-container {
    font-size: 22px;
  }
}


@media (min-width: 0) and (max-width: 249.99px) {
  .jumbotron {
    background: red;
    height: 400px;
  }

  .txt-top-container {
    font-size: 20px;
  }
}

/*
@media (min-width: 576px) {
  .jumbotron {
    background: red;
    height: 40%;
  }

}

@media (max-width: 575px) {
  .jumbotron {
    background: red;
    height: 40%;
  }

}*/
</style>
