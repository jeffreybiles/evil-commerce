<script lang="ts">
  import { products, type Product } from "$lib/data";
  import { page } from '$app/stores'
  let product = products.find(p => p.id == $page.params.item_id) as Product

</script>

{product.id}