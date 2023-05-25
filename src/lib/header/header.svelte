<script>
  import HeaderLogo from "$lib/svg/header-logo.svelte";
</script>

<nav class="navigation">
  <HeaderLogo />
  <ul class="navigation-list">
    <li class="navigation-item">PROJECTS</li>
    <li class="navigation-item">INFO</li>
  </ul>
</nav>

<style lang="css">
  .navigation {
    padding: 0;
    width: 100%;
    margin-bottom: 46px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .logo {
    font-size: 12.3vw;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
  .navigation-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 32px;
  }
  .navigation-item {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
</style>
