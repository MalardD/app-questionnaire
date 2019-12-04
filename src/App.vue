<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/questionnaire">questionnaire</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  Vue.use(VueMaterial)
  export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {},
  created: function () {},
  mounted: function () {},
  computed: {},
  watch: {}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #e45b00;
    }
  }
}




//CSS pour la page d'accueil du questionnaire
//.questionnaire{

//}


h1{
  margin-bottom: 3%;
}

.nom{
  padding-right: 1.5%;
}

.prenom{
  padding-right: 0.5%;
}

.societe{
  padding-right: 0.6%;
}

.button {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  margin-right: 2%;
  margin-left: 2%;
}

.button:hover {
  background-color: #e45b00; 
  color: white;
}
</style>
