<template>
	<div>
		<h2>Résultats</h2>
		<div class="card-deck search-results">
			<MusicCard
							v-for="music in musics"
							v-bind:key="music.id"
							v-bind="music"></MusicCard>
		</div>
	</div>
</template>

<script>
import MusicCard from "./MusicCard";
export default {
  name: "TitleResults",
  components: { MusicCard },
  computed: {
    musics() {
      return this.$store.getters.getMusics;
    }
  }
  // data: function() {
  //   return {
  //     musics: [
  //       {
  //         id: 1,
  //         title: "Lose Yourself",
  //         artiste: "Eminem",
  //         album: "Curtain Call",
  //         duration: 326,
  //         initialFavorite: false
  //       },
  //       {
  //         id: 2,
  //         title: "Without Me",
  //         artiste: "Eminem",
  //         album: "The Eminem Show",
  //         duration: 290,
  //         initialFavorite: true
  //       },
  //       {
  //         id: 3,
  //         title: "The Real Slim Shady",
  //         artiste: "Eminem",
  //         album: "Curtain Call",
  //         duration: 284,
  //         initialFavorite: false
  //       }
  //     ]
  //   };
  // }
};
</script>

<style scoped>
.search-results {
  flex-wrap: wrap;
}
.search-results .card {
  min-width: 200px;
  max-width: 300px;
}
</style>
