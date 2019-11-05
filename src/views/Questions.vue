<template>

  <div id="question" class="questions">
    
    <h1>Et c'est parti pour la première question</h1>
     <question
      v-for="question in questions"
       v-bind:key="question.id"
      v-bind:libelle="question.libelle"
      v-bind:reponse="question.reponse"
    ></question>

  </div>
  
 
</template>

    <script>
    import question from '@/components/Question.vue'

    export default{
      name: 'Questionnaire',
      components : {
        question
      },
      methods: {
        onSubmit: null,
      },
      data(){
        return {
          questions: [
            {id: 1, libelle: 'Doux you lique cofi?', reponse: ['Oui', 'Nnon']},
          ]
        }
      }
    
    }
   
    </script>