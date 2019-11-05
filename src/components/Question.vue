<!-- Utiliser pour une question-->



<template>
<div>
    <h1>{{intitule}}</h1>
    <ui-checkbox v-model="checked" >{{reponse[0]}}</ui-checkbox> 
    <ui-checkbox v-model="checked" >{{reponse[1]}}</ui-checkbox> 
</div>
</template>

<script>

var app = new Vue()
export default {
    name: 'question',
    props: {
        libelle: String,
        reponse: String,
    },
    data(){
        return{
            libelle: this.libelle,
            reponse: this.reponse
        }
    }
    
  
    
}
</script>