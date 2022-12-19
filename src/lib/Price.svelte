<script lang="ts">
  export let productPrice: number | string
</script>

<div class="price">
  <span class="price-symbol">$</span>
  <span class="price-number">{productPrice}</span>
</div>

<style>
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
</style>