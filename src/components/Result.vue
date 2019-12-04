<template>
  <div id="result">
    <md-card>
      <md-card-content>
        <!-- On affiche le score de l'utilisateur  [17/11/2019] -->
        <p> Vous avez fait un score de </p>
        <p class="cb_resultat"> {{ score }} / {{ total }} <br><br>
          <!-- si le score est parfait on affiche une medaille d'or  [17/11/2019] -->
          <span> 🥇 </span>
        </p>
        <!-- Bouton de redirection vers la page d'acceuil [17/11/2019] -->
        <router-link to="/"><md-button class="md-raised md-primary">← Retour</md-button></router-link>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      // Pour recuperer les valeurs on utilise une query qui permet de passe en parametres les valeurs dans l'url
      // score permet de recuperer le nombre de bonnes reponses [17/11/2019]
      score: this.$route.query.score,
      // total permet de recuperer le nombre de question repondu [17/11/2019]
      total: this.$route.query.total
    }
  },
  methods: {},
  created: function () {},
  mounted: function () {},
  watch: {}
}
</script>

<style>
#result {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 50%;
  min-width: 250px;
}
.cb_presentation{
  font-size: 25px;
}
.cb_resultat{
  font-size: 30px;
}
</style>
