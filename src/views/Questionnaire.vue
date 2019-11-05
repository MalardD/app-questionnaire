
<template>

  <div class="questionnaire">
    
    <h1>Voici le questionnaire</h1>
    <p><span class="nom">Nom</span><input type="text" required></p>
    <p><span class="prenom">Prénom</span><input type="text" required></p>
    <p><span class="societe">Société</span><input type="text" required></p>
    <router-link to="/questions"><input class="button" type="button" value="Commencer" ></router-link>
    <input class="button" type="button" value="Annuler">

    <question></question>
  </div>
 
</template>
