<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <router-link class="navbar-brand" to="/"><i class="fa fa-headphones"></i> Deezweb</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-right">
                <router-link class="nav-item nav-link" to="/login"><i class="fa fa-sign-in"></i> Connexion</router-link>
                <router-link class="nav-item nav-link" to="/register"><i class="fa fa-user-plus"></i> Inscription</router-link>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-nav.nav-right {
  margin-left: auto;
}
</style>
