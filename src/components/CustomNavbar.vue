<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <router-link class="navbar-brand" to="/"><i class="fa fa-headphones"></i> Deezweb</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-right" v-if="!loggedIn">
                <router-link class="nav-item nav-link" to="/login"><i class="fa fa-sign-in"></i> Connexion</router-link>
                <router-link class="nav-item nav-link" to="/register"><i class="fa fa-user-plus"></i> Inscription</router-link>
            </div>
            <div class="navbar-nav nav-right" v-else>
                <router-link class="nav-item nav-link" to="/search"><i class="fa fa-search"></i> Recherche</router-link>
                <router-link class="nav-item nav-link" to="/favorites"><i class="fa fa-heart"></i> Mes favoris</router-link>
                <!-- <a class="nav-item nav-link" href="login.html"><i class="fa fa-sign-in"></i> Connexion</a>
            <a class="nav-item nav-link" href="register.html"><i class="fa fa-user-plus"></i> Inscription</a> -->
                <div class="nav-item dropleft">
                    <a class="nav-link dropdown-toggle" id="userMenu" role="button" data-toggle="dropdown">
                        <img src="https://secure.gravatar.com/avatar/ab80b4d52a10aaea34780144949caef0" alt="JM Cléry"
                             width="28" height="28">
                    </a>
                    <div class="dropdown-menu" aria-labelledby="userMenu">
                        <h6 class="dropdown-header">John SMITH</h6>
                        <router-link class="dropdown-item" to="/account">Mon compte</router-link>
                        <router-link class="dropdown-item" to="/logout" v-on:click="logout">Déconnexion</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "CustomNavbar",
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("setLoggedIn", false);
    }
  }
};
</script>

<style>
.navbar-nav.nav-right {
  margin-left: auto;
}
</style>
