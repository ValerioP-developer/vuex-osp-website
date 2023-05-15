<template>
  <div class="bottom-container">
    <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BottomContainer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sticky-footer {
  @media (max-width: 766px) {
    margin-top: 30%;
  }
}

#sticky-footer {
  @media (min-width: 767px) {
    margin-top: 20%;
  }
}
</style>

