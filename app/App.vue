<template>
  <div id="app">
    <router-view/>
    <!-- <div>add</div> -->
    <!-- <Bar /> -->
  </div>
</template>

<script>
import Bar from "./componment/Bar.vue"
import "./assets/index.css"
export default {
  name: 'app',
  data(){
    return {
      test:'asd'
    }
  },
  created() {
    
  },
  components:{
    Bar
  }
}
</script>
<style lang="css" scoped>
#app{
  background-color: #cccccc
}
</style>



