<script>
const products = [
    {
      id: 12,
      name: 'Zynga Credits',
      price: 29,
    },
    {
      id: 92,
      name: '1-way plane ticket to Las Vegas',
      price: 174,
    },
    {
      id: 73,
      name: 'Roundup Weedkiller',
      price: 12,
    },
    {
      id: 66,
      name: 'Seed Oils',
      price: 4
    },
    {
      id: 69,
      name: "Oxycontin",
      price: 87,
    },
    {
      id: 666,
      name: 'H****r Memorabilia',
      price: 62,
    },
    {
      id: 1,
      name: 'Nuclear Warhead (3-bomb value pack!)',
      price: 873_249
    },
  ]
</script>

<h1>Welcome to E(vil)-Commerce</h1>
{#each products as product}
  <h2>{product.name}</h2>
  <p>${product.price}</p>
{/each}
<style>

</style>