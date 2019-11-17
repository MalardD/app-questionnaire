<template>

  <div id="question" class="questions">
    <h1>Et c'est parti pour la première question</h1>
     <question
      v-for="question in questions"
      v-bind:key="question.id"
      v-bind:libelle="question.libelle"
      v-bind:reponse="question.reponse"
      v-bind:optionReponse="question.optionReponse"
     
    > </question>
   
  </div>  
</template>
    <script>
    import question from '@/components/Question.vue'
    export default{
      name: 'questionnaire',
      components : {
        question
        
      },
      /*methods: {
        onSubmit: null,
        
      },*/


      //Je n'ai pas réusi à réalisé la navigation de page,
      //ni la récupération des bonnes réponses.
      //J'arrive néamoins à afficher mes réponses.
      //

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
            {libelle: 'Combien font 2 + 2 ?', optionReponse: ['4' , '3' , '8'], reponse: [], bonneRep: 0 },
            {libelle: 'Qui a gagné la coupe du monde 2018 de football ?', optionReponse: ['Croatie' , 'France' , 'Belgique'],  reponse: [], bonneRep: 1,},
            {libelle: 'Quelles sont les date de la seconde guerre mondiale ?', optionReponse: ['14-18' , '39-45' , 'la Seconde guerre mondiale a été inventé'],  reponse: [], bonneRep:1  },
            {libelle: 'Quel est le prénom du président Hollande ?', optionReponse: ['François' , 'Nicolas' , 'Stéphane'], bonneRep: [], bonneRep: 0 },
            {libelle: 'Combien font 4 + 5 * 2 ?', optionReponse: ['18' , '14' , 'Trop compliqué'], reponse: [], bonneRep: 1 },
            {libelle: 'Quel est la couleur du cheval blanc de Heri IV ?', optionReponse: ['blanc' , 'noir' , 'vert'], reponse: [], bonneRep: 0 },
            {libelle: 'Quel joueur de football a déja mordu ces adversaires ?', optionReponse: ['Crisitiano Ronaldo' , 'Lionel Messi' , 'Luis Suárez'], reponse: [], bonneRep: 2 },
            {libelle: 'Quel joueur de football a volontairement donné un coup de tête à son adversaire ?', optionReponse: ['Olivier Giroud' , 'N\'Golo Kanté' , 'Zinédine Zidane'], reponse: [], bonneRep: 2 },
            {libelle: 'Qu\'est ce que la Guerre Froide ?', optionReponse: ['La guerre pendant l\'hiver' , 'Un conflit sans arme' ], reponse: [], bonneRep: 1 },
            {libelle: 'Avez-vous aimez ce questionnaire ?', optionReponse: ['oui' , 'non'], reponse: [], bonneRep: 0 },
            
          ]

        }
      },
      methods: {
        action: function(index) {
        // Test bonne réponse
          if(index == this.questions[this.index].bonneRep) {
            this.score++;
          }
     /* // Test fin du questionnaire
      if(this.index == this.questions.length - 1) {
        this.fin = true;
      } else {
        this.index++;
      }*/
        }
      }
}
</script>