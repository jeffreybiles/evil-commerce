<script>
  import { page } from '$app/stores'
  import { products } from '$lib/data';

  const product = products.find(p => p.id == $page.params.item_id)
</script>
{#if product}
  {product.name}
  {$page.params.item_id}
{:else}
  No product with that ID
{/if}