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
			<a href="#" class="btn btn-outline-danger btn-sm"><i class="fa fa-heart-o"></i></a>
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
    duration: Number
  }
};
</script>

<style scoped>
</style>
