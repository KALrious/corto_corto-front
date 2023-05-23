<script>
  import Footer from "../components/footer/footer.svelte";
  import Header from "../components/header/header.svelte";
</script>

<div id="app">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="css">
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
