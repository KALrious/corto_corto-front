<script>
  import Footer from "../lib/footer/footer.svelte";
  import Header from "../lib/header/header.svelte";
  import "../global.css";
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
    position: relative;
  }
</style>
