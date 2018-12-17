<template>
	<form>
		<div class="row">
			<label for="searchText" class="col-sm-2 col-form-label text-right">Recherche&nbsp;:</label>
			<div class="col-sm-4">
				<input v-model="search.searchText" type="text" class="form-control" id="searchText" placeholder="Eminem, Armin Van Buuren, Rihanna, ...">
			</div>
			<label for="searchText" class="col-sm-2 col-form-label text-right">Trier par :</label>
			<div class="col-sm-2">
				<select id="order" class="custom-select" v-model="search.searchCriteria">
					<option>Album</option>
					<option>Artiste</option>
					<option>Musique</option>
					<option>Les plus populaires</option>
					<option>Les mieux notés</option>
				</select>
			</div>
			<div class="col-sm-2 text-right">
				<input type="submit" class="btn btn-primary" value="Go" v-on:click="updateArticleList">
			</div>
		</div>
	</form>
</template>

<script>
export default {
  name: "TitleSearchForm",
  computed: {
    search() {
      return this.$store.getters.getSearchParams;
    }
  },
  methods: {
    updateArticleList: function(event) {
      //to avoid form being submitted
      event.preventDefault();
      this.$store.dispatch("setMusics", this.search);
    }
  }
};
</script>

<style scoped>
</style>
