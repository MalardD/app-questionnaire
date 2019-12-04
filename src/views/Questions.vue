<template>

  <div id="question" class="questions">
    <h1 v-if="counter==0">Et c'est parti pour la première question</h1>
    <h1 v-else> Vous etes question : {{counter+1}}</h1>
      <question :key="questions[counter].id" :libelle="questions[counter].libelle" :reponse="questions[counter].reponse" :optionReponse="questions[counter].optionReponse" :correctAnswer="questions[counter].bonneRep" @nextQuestion="getResponse"/> 
  </div>  
</template>
    <script>
    import question from '@/components/Question.vue'
    export default{
      name: 'questionnaire',
      components : {
        question
        
      },

      data () {
        return {
          //fin:false,
          index: 0, 
          score : 0,

         //Dans chaque question la valeur "bonneRep" renvoi à la bonne réponse
         //de la question dans le tableau et lorsque le joueur sélectionne
         //cette réponse, son score s'incrémente.
         //Voir la méthode ci-dessosu.
          questions: [ 
            {libelle: 'Combien font 2 + 2 ?', optionReponse: ['4' , '3' , '8'], reponse: [], bonneRep: '4' },
            {libelle: 'Qui a gagné la coupe du monde 2018 de football ?', optionReponse: ['Croatie' , 'France' , 'Belgique'],  reponse: [], bonneRep: 'France',},
            {libelle: 'Quelles sont les date de la seconde guerre mondiale ?', optionReponse: ['14-18' , '39-45' , 'la Seconde guerre mondiale a été inventé'],  reponse: [], bonneRep:'39-45' },
            {libelle: 'Quel est le prénom du président Hollande ?', optionReponse: ['François' , 'Nicolas' , 'Stéphane'], reponse: [], bonneRep: '4' },
            {libelle: 'Combien font 4 + 5 * 2 ?', optionReponse: ['18' , '14' , 'Trop compliqué'], reponse: [], bonneRep: '4' },
            {libelle: 'Quel est la couleur du cheval blanc de Heri IV ?', optionReponse: ['blanc' , 'noir' , 'vert'], reponse: [], bonneRep: '4' },
            {libelle: 'Quel joueur de football a déja mordu ces adversaires ?', optionReponse: ['Crisitiano Ronaldo' , 'Lionel Messi' , 'Luis Suárez'], reponse: [], bonneRep: '4' },
            {libelle: 'Quel joueur de football a volontairement donné un coup de tête à son adversaire ?', optionReponse: ['Olivier Giroud' , 'N\'Golo Kanté' , 'Zinédine Zidane'], reponse: [], bonneRep: '4' },
            {libelle: 'Qu\'est ce que la Guerre Froide ?', optionReponse: ['La guerre pendant l\'hiver' , 'Un conflit sans arme' ], reponse: [], bonneRep: '4' },
            {libelle: 'Avez-vous aimez ce questionnaire ?', optionReponse: ['oui' , 'non'], reponse: [], bonneRep: '4' },
            
          ],
          counter: 0,
          max_question: 0,
          correcteAnswer:0

        }
      },

      mounted:function (){
        this.max_question = this.questions.length
      },
      methods: {
        action: function(index) {
        // Test bonne réponse
          if(index == this.questions[this.index].bonneRep) {
            this.score++;
          }
        },
        getResponse: function (d) {
          if (d)
            this.correcteAnswer++
          this.counter++
        },
      },
      watch:{
        counter: function (val) {
          if (this.counter == this.max_question)
            this.$router.push({ path: '/result', query: { score: this.correcteAnswer, total: this.max_question }})
        }

      }
}
</script>