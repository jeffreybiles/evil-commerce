export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.9',
  githubUrl: string,
  youtubeId: string,
}
export type Lesson = {
  name: string,
  exampleSubdomain: string,
  implementations: Implementation[],
  comingSoon?: boolean,
  description: string,
}

export const load = async () => {
  const response = await fetch('https://evil-commerce-api.deno.dev/lessons/lesson-01')
  console.log(response)
  const data  = await response.json()
  return {
    lesson: data.lesson,
    previousLesson: data.previousLesson,
    nextLesson: data.nextLesson,
  }
}

// export let ssr = false;