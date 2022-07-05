<template>
  <div class="top-content">
    <div class="container-cart">
      <div class="cart-border">
        <span class="cart">{{text}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["text"],
};
</script>
<style scoped>
  .top-content{
    height: 30%;
    display: flex;
    flex-direction: column;
  }

  .top-content .container-cart{
    text-align: end;
  }


  .top-content .container-cart .cart{
    background: green;
    padding: 8px 15px;
    margin: 12px;
    border-radius: 4px;
    color: #fff;
    box-sizing: border-box;
    line-height: 52px;
  }
</style>
