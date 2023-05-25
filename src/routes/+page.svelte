<script lang="ts">
  import ProjectPresentation from "../lib/project-presentation/project-presentation.svelte";
  import type { ProjectLanding } from "./types";
  export let data: ProjectLanding;
</script>

<svelte:head>
  <title>Corto__Corto</title>
  <meta
    name="description"
    content="présentation de l'architecture designé par Corto__Corto"
  />
</svelte:head>

<div class="body">
  {#each data.data as project}
    <ProjectPresentation
      src={project.attributes.mainImage.data.attributes.url}
      mainLabel={project.attributes.label}
    />
  {/each}
</div>

<style lang="css">
  .body {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 768px) {
      margin: 0 56px;
    }
  }
</style>
