<template>
	<form>
		<div class="row">
			<label for="searchText" class="col-sm-2 col-form-label text-right">Recherche&nbsp;:</label>
			<div class="col-sm-4">
				<input type="text" class="form-control" id="searchText" placeholder="Eminem, Armin Van Buuren, Rihanna, ...">
			</div>
			<label for="searchText" class="col-sm-2 col-form-label text-right">Trier par :</label>
			<div class="col-sm-2">
				<select id="order" class="custom-select">
					<option>Album</option>
					<option>Artiste</option>
					<option>Musique</option>
					<option>Les plus populaires</option>
					<option>Les mieux notés</option>
				</select>
			</div>
			<div class="col-sm-2 text-right">
				<input type="submit" class="btn btn-primary" value="Go">
			</div>
		</div>
	</form>
</template>

<script>
    export default {
        name: "TitleSearchForm"
    }
</script>

<style scoped>

</style>