<template>
  <div class="home">
    <HelloWorld msg="Bem vindo ao seu App Vue.js"/>
    <button>Sair</button>
  </div>
</template>

<script> 

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    // logout: function() {
    //   firebase.auth().signOut().then(() => {
    //     this.$router.replace('login')
    //   })
    // }
  }
}
</script>