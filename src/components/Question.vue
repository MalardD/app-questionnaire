<!-- Utiliser pour une question-->
<template>
  <div>
    <h1>{{libelle}}</h1>
    <el-checkbox-group v-model="reponse">
      <el-checkbox v-for="option in optionReponse" v-bind:key="option" :label="option" @click="action(index)">{{option}}</el-checkbox>
    </el-checkbox-group>
    {{reponse}}
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">Question précédente</el-button>
      <el-button type="primary">Question suivante<i class="el-icon-arrow-right el-icon-right"></i></el-button>
    </el-button-group>

    <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
  </div>
</template>

<script>
  export default {
    name: 'question',
    props: {
        libelle: String,
        reponse: String,
        optionReponse: Array
    },
     
    data (){
        return{
             libelle: this.libelle,
             reponse: this.reponse,
             optionReponse: this.optionReponse
        }
    }
    
  
  }    
</script>