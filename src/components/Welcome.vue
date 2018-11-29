<template>
	<div>
		<h1>Bienvenue {{user.firstname}} {{user.lastname}}</h1>
		<p>Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
	</div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style scoped>
</style>
