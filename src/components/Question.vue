<!-- Utiliser pour une question-->
<template>
  <div>
    <!-- Affichage de l'intitulé de la question -->
    <h1>{{libelle}}</h1>

    <!-- Affichage des reponses sous la forme de case à cocher-->

    <md-checkbox v-for="option in optionReponse" v-model="reponse" :value="option">{{ option }}</md-checkbox>

    <!--<el-checkbox v-for="option in optionReponse" v-bind:key="option" :label="option" @click="action(index)">{{option}}</el-checkbox>-->
    

    <!-- Bouton permettant la navigation entre les pages 
    ps: Ne fonctionne pas-->
    
    <!-- Message affichant le score mais ne fonctionne pas-->
    <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
    <br>
    <md-button class="md-raised md-primary" v-on:click="$emit('nextQuestion', checkResponse())">Suivante →</md-button>
    <br><br><br><br>{{reponse}}
  </div>
</template>

<script>
  export default {
    name: 'question',
    props: {
        libelle: String,
        reponse: String,
        optionReponse: Array,
        correctAnswer: String
    },
    data () {
        return {
             /*libelle: this.libelle,
             reponse: this.reponse,
             optionReponse: this.optionReponse*/
        }
    },
    methods:{
      checkResponse: function () {
        var cb_res = true
        if (this.reponse.indexOf(this.correctAnswer) === -1)
          cb_res = false
        return cb_res
      }
    }
} 
</script>