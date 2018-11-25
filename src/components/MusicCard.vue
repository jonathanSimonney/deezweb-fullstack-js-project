<template>
	<div class="card">
		<a href="#"><img class="card-img-top" src="//via.placeholder.com/180x100.png?text=Lose+Yourself" alt="Card image cap"></a>
		<div class="card-body">
			<h5 class="card-title"><a href="#">{{title}}</a></h5>
			<p class="card-text">{{artiste}} / {{album}}</p>
			<p class="card-text"><small class="text-muted">Durée : {{duration | moment("mm[m]ss")}}</small></p>
		</div>
		<div class="card-footer">
			<a href="#" class="btn btn-secondary btn-sm"><i class="fa fa-cc-discover"></i> Album</a>
			<a href="#" class="btn btn-secondary btn-sm"><i class="fa fa-user"></i> Artiste</a>
			<a href="#" v-bind:class="heartClass" v-on:click="switchFavorite"><i class="fa fa-heart-o"></i></a>
		</div>
	</div>
</template>

<script>
export default {
  name: "MusicCard",
  props: {
    id: Number,
    title: String,
    artiste: String,
    album: String,
    duration: Number,
    initialFavorite: Boolean
  },
  data: function() {
    return {
      favorite: this.initialFavorite
    };
  },
  computed: {
    heartClass: function() {
      return {
        "btn btn-danger btn-sm": this.favorite,
        "btn btn-outline-danger btn-sm": !this.favorite
      };
    }
  },
  methods: {
    switchFavorite() {
      this.favorite = !this.favorite;
    }
  }
};
</script>

<style scoped>
</style>
