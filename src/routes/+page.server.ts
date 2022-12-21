export const load = async () => {
  const response = await fetch('https://evil-commerce-api.deno.dev/lessons')
  const lessons  = await response.json()
  return {
    lessons
  }
}