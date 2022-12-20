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
  <h2>{lesson.name}</h2>
  <!-- TODO - link to the subdomain -->
  <!-- TODO - put framework icons for each of the implementations that are available, maybe direct links to the github repo and videos -->
  <!-- TODO - if comingSoon is true, then style it differently -->
{/each}
<style>

</style>