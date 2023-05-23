<script lang="ts">
  export let src = "";
  export let alt = "";
  export let mainLabel = "";
</script>

<div class="content">
  <img class="image" {src} {alt} />
  <div class="overlay">
    <h3 class="label">{mainLabel}</h3>
  </div>
</div>

<style lang="css">
  .content {
    position: relative;
    display: inline-block;
    max-width: 520px;
    max-height: 640px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9dad9;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    font-size: 24px;
    color: #000000;
    text-align: center;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  .content:hover .overlay {
    opacity: 0.8;
  }
  .content:hover .label {
    opacity: 1;
  }
</style>
