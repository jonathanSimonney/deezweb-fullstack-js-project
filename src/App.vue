<template>
  <div id="app">
    <CustomNavbar></CustomNavbar>
    <router-view/>
  </div>
</template>

<script>
import CustomNavbar from "@/components/CustomNavbar.vue";
export default {
  name: "app",
  components: {
    CustomNavbar
  }
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
body > main.container {
  margin-top: 2rem;
}
</style>
