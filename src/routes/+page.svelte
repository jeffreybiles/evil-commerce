<script lang="ts">
type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.9',
  githubUrl: string,
  youtubeUrl: string,
}
type Lesson = {
  name: string,
  exampleSubdomain: string,
  implementations: Implementation[],
  comingSoon?: boolean,
}

const lessons: Lesson[] = [
    {
      name: 'Lesson 01 - Intro to Components and Routing',
      exampleSubdomain: 'lesson-01',
      implementations: [
        {
          framework: 'SvelteKit 1.0',
          githubUrl: 'https://github.com/jeffreybiles/evil-commerce/commits/lesson-01',
          youtubeUrl: '',
        },
      ]
    }
  ]
</script>

<h1>Welcome to E(vil)-Commerce</h1>
{#each lessons as lesson}
  <div class="lesson">
    <h2>{lesson.name}</h2>
    <a href="https://{lesson.exampleSubdomain}.evil-commerce.com" target="_blank" rel="noreferrer">
      See it in action
    </a>
    {#each lesson.implementations as implementation}
      <h3>{implementation.framework}</h3>
      <a href={implementation.githubUrl} target="_blank" rel="noreferrer">See the code</a>
      <a href={implementation.youtubeUrl} target="_blank">See the video</a>
    {/each}
  </div>
  <!-- TODO - link to the subdomain -->
  <!-- TODO - put framework icons for each of the implementations that are available, maybe direct links to the github repo and videos -->
  <!-- TODO - if comingSoon is true, then style it differently -->
{/each}
<style>
.lesson {
  border: 1px solid black;
  padding: 1rem;
  padding-top: 0;
  margin: 1rem;
}
</style>