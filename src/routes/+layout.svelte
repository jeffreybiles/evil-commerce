<script lang="ts">
  import type { PageData } from './$types';
  import BaseModal from "$lib/BaseModal.svelte";
  import type { Lesson } from './+layout.server';

  export let data: PageData;
  const { lesson, previousLesson, nextLesson }: { lesson: Lesson, previousLesson: Lesson, nextLesson: Lesson} = data;

  let lessonModalOpen = true;
  let selectedFramework = 'SvelteKit 1.0';
  $: selectedImplementation = lesson.implementations.find(implementation => implementation.framework === selectedFramework);

</script>


{#if lessonModalOpen}
  <BaseModal close={() => lessonModalOpen = false}>
    <div class="modal-content">
      <h1>{lesson.name}</h1>

      {#if lesson.description}
        <div class="description">
          {@html lesson.description}
        </div>
      {/if}
      <div class="implementation-tabs">
        {#each lesson.implementations as implementation}
          <div
            class="implementation-tab {implementation.framework == selectedFramework ? 'selected' : ''}"
            on:click={() => selectedFramework = implementation.framework}
            on:keypress={() => selectedFramework = implementation.framework}
          >
            <div>{implementation.framework}</div>
          </div>
        {/each}
      </div>
      <div class="content">
        <div class="button-links">
          <a class="button-link" href={selectedImplementation?.githubUrl}>{lesson.exampleSubdomain} branch</a>
          <a class="button-link" href="https://www.youtube.com/watch?v={selectedImplementation?.youtubeId}">Watch on YouTube</a>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/{selectedImplementation.youtubeId}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="navigation-buttons">
        <div class="previous-button">
          {#if previousLesson}
            <a class="button" href="https://{previousLesson?.exampleSubdomain}.evil-commerce.com/">
              Previous
            </a>
          {:else}
            <div class="button disabled">Previous</div>
          {/if}
        </div>
        <div class="index-button">
          <a class="button" href="https://www.evil-commerce.com/">Index</a>
        </div>
        <div class="next-button">
          {#if nextLesson}
            <a class="button" href="https://{nextLesson?.exampleSubdomain}.evil-commerce.com/">
              Next
            </a>
          {:else}
            <div class="button disabled">Next</div>
          {/if}
        </div>
      </div>
    </div>
  </BaseModal>
{/if}

{#if lesson}
  <button class="lesson-modal-button" on:click={() => lessonModalOpen = true}>
    Tutorials for making this site in {lesson.implementations.map(implementation => implementation.framework).join(', ')}
  </button>
{/if}

<slot />

<style>
  .lesson-modal-button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #333333;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.7);
    border: none;
  }

  .description {
    margin: 16px 0;
  }

  .implementation-tabs {
    display: flex;
    flex-direction: row;
    justify-content: start;
    border-bottom: none;
  }
  .implementation-tab {
    padding: 8px 16px;
    background-color: #FFFFFF;
    color: #333333;
    cursor: pointer;
    border: black 1px solid;
    border-left: none;
    border-bottom: none;
    cursor: pointer;
    font-size: 20px;
  }
  .implementation-tab.selected {
    background-color: #333333;
    color: #FFFFFF;
  }
  .implementation-tab:first-of-type {
    border-left: black 1px solid;
  }

  .content {
    background-color: #333333;
    padding: 8px;
    border: none;
  }

  .button-links {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-bottom: 8px;
  }

  .button-link {
    display: block;
    margin-left: 8px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #CCCCCC;
    color: black;
    text-decoration: none;
  }

  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .navigation-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 8px;
  }
  .previous-button {
    display: flex;
    justify-content: flex-start;
  }
  .next-button {
    display: flex;
    justify-content: flex-end;
  }
  .index-button {
    display: flex;
    justify-content: center;
  }
  .button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #CCCCCC;
    color: black;
    cursor: pointer;
    border: none;
    text-decoration: none;
  }
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>