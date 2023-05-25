<script lang="ts">
  import Logo from "../svg/logo-desktop.svelte";
</script>

<footer class="footer">
  <Logo />
</footer>

<style lang="css">
  .footer {
    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translate(50%, 0);
    margin: 51px 0;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
      margin: 22px 0;
    }
  }
</style>
