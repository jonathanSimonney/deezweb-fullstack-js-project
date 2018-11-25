<!--todo separate this in two components and iterate to render the differents cards components-->
<template>
    <main class="container">
        <Welcome></Welcome>
        <hr>
        <TitleSearchForm></TitleSearchForm>
        <hr>

        <TitleResults></TitleResults>
    </main>
</template>

<script>
import Welcome from "../../components/Welcome";
import TitleSearchForm from "../../components/TitleSearchForm";
import TitleResults from "../../components/TitleResults";
export default {
  name: "Search",
  components: { TitleResults, TitleSearchForm, Welcome }
};
</script>

<style scoped>
</style>
