<script>
  import Icon from '@iconify/svelte';

  import { page } from '$app/stores'
  import { products } from '$lib/data';
    import Price from '$lib/Price.svelte';

  const product = products.find(p => p.id == $page.params.item_id)
</script>
<div class="page-wrapper">
  {#if product}
    <div class="product-page">
      <div class="product-image"><img src={product.image} /></div>
      <div class="product-description">
        <div class="product-name">{product.name}</div>
        {#each (new Array(5).fill('')) as star}
          <Icon icon="material-symbols:star" />
        {/each}
        <Price productPrice={product.price} />
        <div class="description">Here is a longer description.</div>

        <button class="add-to-cart">Add to Cart</button>
        <button class="buy-now">Buy Now</button>
        <div class="shipping-label">FREE* anytime** shipping</div>

        <div class="fine-print">
          <div>* If it's free, you're the product</div>
          <div>** Anytime we feel like it</div>
        </div>
      </div>
    </div>
  {:else}
    No product with that ID
  {/if}
</div>

<style>
  .page-wrapper {
    min-width: 600px;
    max-width: 1024px;
    margin: auto;
    padding: 4px;
    color: #0F1111;
  }
  .product-image {
    padding: 8px;
  }
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-position: center; /* Center the image within the element */
    object-fit: cover;
    background-color: #0F1111;
  }
  .product-page {
    display: grid;
    grid-template-columns: minmax(450px, 1fr) minmax(250px, 1fr);
  }
  .product-description {
    padding: 8px;
    font-size: 24px;
    line-height: 30px;
  }
  .product-description .description {
    font-size: 16px;
  }
  .order-details {
    padding: 8px;
  }
  .shipping-label {
    font-size: 16px;
  }
  button {
    height: 30px;
    border-radius: 30px;
    width: 200px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    display: block;
  }
  button.add-to-cart {
    background-color: #F7CA00;
  }
  button.add-to-cart:hover {
    background-color: #EABC00;
  }
  button.buy-now {
    background-color: #FFA41C;
  }
  button.buy-now:hover {
    background-color: #F39A1C;
  }
  .fine-print {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
</style>