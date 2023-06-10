<template>
  <div class="about">
    <TopContainer :route=route> </TopContainer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="images/profile-me-3.jpg" id="profile-me" alt="Avatar">
        </div>
        <div class="col-md-6">
          <span class="sub-title"> Intro <br><br></span>
          Hi my name is Valerio. Welcome to my website ! <br> <br>
          Let's take a look ;) <!-- and, why not following my future update on Instagram as well ? --> <br><br>
          With over 4 years in the IT-industry and International work experience as IT-Consultant Europe/Canada; <br>
          Currently focused on <span style="color:orange ;">Web Development </span>
        </div>
      </div>
      <div class="row">
        <!-- Full-width images with number and caption text -->
        <div class="col-12 project-col">
          <div class="sub-title" style="font-size:20px ;"><b>Loopstudio</b></div>
          <!--<div class="numbertext">1 / 3</div>-->
          <a href="indexLoopStudio.html" target="_blank"> <img src="images-loopstudio/click-loopstudio-background.png"
              style="width:100%"> </a>
        </div>
        <div class="col-12 project-col">
          <div class="sub-title" style="font-size:20px ;"><b>SunnySide</b></div>
          <!--<div class="numbertext">2 / 3</div>-->
          <a href="indexSunnySide.html" target="_blank"> <img src="images-sunnyside/click-sunny-background.png"
              style="width:100%"> </a>
        </div>
        <div class="col-12 project-col">
          <div class="sub-title" style="font-size:20px ;">Fylo </div>
          <!--<div class="numbertext">3 / 3</div>-->
          <a href="indexFylo.html" target="_blank"> <img src="images-fylo/click-filo-background.png" style="width:100%">
          </a>
        </div>
      </div>
    </div>
    <BottomContainer></BottomContainer>
  </div>
</template>
<script>
import TopContainer from '@/components/TopContainer.vue'
import BottomContainer from '@/components/BottomContainer.vue'
export default {
  name: 'AboutView',
  components: {
    TopContainer,
    BottomContainer
  },
  data() {
    return {
      route: 'about'
    }
  }
}
</script>
<style>
#flex-about {
  margin-left: 5%;
  margin-right: 5%;
}

.project-col {
  padding-left: 5%;
  padding-right: 5%;
}

.sub-title {
  font-size: 18px;
  color: red;
  margin-bottom: 5%;
  margin-top: 5%;
}

@media (min-width: 768px) {
  #profile-me {
    width: 60%;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  #profile-me {
    width: 60%;
  }
}
</style>