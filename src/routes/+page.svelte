<script>
const products = [
    {
      id: 12,
      name: 'Zynga Credits',
      price: 29,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Zynga.svg/1920px-Zynga.svg.png',
    },
    {
      id: 92,
      name: '1-way plane ticket to Las Vegas',
      price: 174,
      image: 'https://www.hertz.com/content/dam/hertz/global/blog-articles/things-to-do/LasVegas1-1499600606-900x580-c-default.jpg'
    },
    {
      id: 73,
      name: 'Roundup Weedkiller',
      price: 12,
      image: 'http://mobileimages.lowes.com/productimages/8cbb7d35-3187-4b61-9920-7638ffc211fb/07889193.jpg'
    },
    {
      id: 66,
      name: 'Seed Oils',
      price: 4,
      image: 'https://chriskresser.com/wp-content/uploads/iStock-805182502-UygarGeographic.jpg'
    },
    {
      id: 69,
      name: "Oxycontin",
      price: 87,
      image: 'https://static01.nyt.com/images/2020/04/13/upshot/13up-health-opioids1/merlin_165415239_a5691fb3-0a47-4b01-ad6d-b1171ca41194-superJumbo.jpg'
    },
    {
      id: 666,
      name: 'H****r Memorabilia',
      price: 62,
      image: 'https://images.saymedia-content.com/.image/t_share/MTg4MTYzMzg1MzU4MTY1OTA5/the-top-10-worst-dictators-in-history.jpg'
    },
    {
      id: 1,
      name: 'Nuclear Warhead (3-bomb value pack!)',
      price: 873_249,
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Mark_VI_USAFM.jpg'
    },
  ]
</script>

<div class="page-wrapper">
  <h1 class="page-title">Welcome to E(vil)-Commerce</h1>
  <div class="product-container">
    {#each products as product}
      <div class="product">
        <img src={product.image} />
        <div class="product-description">
          <div>{product.name}</div>

          <div class="price">
            <span class="price-symbol">$</span>
            <span class="price-number">{product.price}</span>
          </div>
          <div class="delivery">FREE* anytime delivery</div>
        </div>
      </div>
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
