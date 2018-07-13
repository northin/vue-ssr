<template>
  <div id="bar">
    <!-- <router-view/> -->
    <div>new</div>
    <div @click="test1">{{ test }}</div>
    <div>{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data(){
    return {
      test:'asd'
    }
  },
  asyncData ({ store, route }){  //触发函数
    return store.dispatch("test",1)
  },
  methods:{
    test1(){
      console.log("test")
    }
  },
  computed:{
    item () {
      console.log(this.$store.state)
      return this.$store.state.items[1]
    }
  },
  created() {
    
  },
}
</script>



