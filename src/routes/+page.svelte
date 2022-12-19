<script lang="ts">
import Icon from '@iconify/svelte';
import { products } from '$lib/data.js';

</script>

<div class="page-wrapper">
  <h1 class="page-title">Welcome to E(vil)-Commerce</h1>
  <div class="product-container">
    {#each products as product}
      <a class="product" href="/item/{product.id}" >
        <img src={product.image} />
        <div class="product-description">
          <div>{product.name}</div>

          {#each (new Array(5).fill('')) as star}
            <Icon icon="material-symbols:star" />
          {/each}

          <div class="price">
            <span class="price-symbol">$</span>
            <span class="price-number">{product.price}</span>
          </div>
          <div class="delivery">FREE* anytime delivery</div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .page-wrapper {
    min-width: 600px;
    max-width: 1024px;
    margin: auto;
    padding: 4px;
    color: #0F1111;
  }
  .page-title {
    font-size: 40px;
    padding: 8px;
  }
  .product-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .product {
    padding-left: 4px;
    padding-right: 4px;
    margin: 4px;
    border: 1px solid #EEEEEE;
    border-radius: 6px;
    color: #0F1111;
    text-decoration: none;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-position: center; /* Center the image within the element */
    object-fit:cover;
    background-color: #0F1111;
  }
  .product-description {
    width: 100%;
  }
  .price {
    cursor: pointer;
    font-size: 4px; /* This is so that the space betwen the $ and the price is smaller  */
  }
  .price-symbol {
    font-size: 13px;
    position: relative;
    top: -0.75em;
  }
  .price-number {
    font-size: 28px;
    font-weight: 400; 
  }

  .delivery {
    font-size: 14px;
    line-height: 20px;
    font-family: Arial sans-serif;
  }

  @media (min-width: 1024px) {
    .product-container {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
