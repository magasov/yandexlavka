<template>
  <div class="cart">
    <div class="cart__main">
      <h3>Корзина</h3>

      <div v-if="cartItems.length === 0" class="cart__none">
        <img src="https://yastatic.net/s3/lavka-web/public/assets/images/emptyCart@2x.png" width="100" alt="" loading="eager">
        <h3>В вашей корзине пока пусто</h3>
        <p>Тут появятся товары, которые вы закажете.</p>
      </div>

      <div class="cart__yes" v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart__item">
          <div class="cart__item-data">
            <img :src="item.image" alt="">
            <div class="title_data">
              <p>{{ item.description }}</p>
              <div class="priceAndMl">
                <p>{{ item.price }}</p>
                <span>·</span>
                <span>{{ item.weight }}</span>
              </div>
            </div>
          </div>
          <div class="counts">
            <div class="buttons" @click="updateQuantity(item.id, -1)">-</div>
            <p>{{ item.quantity }}</p>
            <div class="buttons" @click="updateQuantity(item.id, 1)">+</div>
          </div>
        </div>
      </div>

      <div class="count">
        <p>Товаров в корзине:</p>
        <span>{{ cartItems.length }}</span>
      </div>
    </div>
  </div>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';

const cartItems = ref([]);

const loadCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.value = cart;
};

const updateQuantity = (itemId, amount) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find((item) => item.id === itemId);

  if (item) {
    item.quantity += amount;

    if (item.quantity <= 0) {
      cart.splice(cart.indexOf(item), 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
};

const removeFromCart = (itemId) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  loadCart();
};

onMounted(() => {
  loadCart();
});
</script>

  
  <style lang="scss" scoped>
  .cart {
    flex: 2;
    margin-left: 50px;
    height: max-content;
    position: sticky;
    height: calc(100vh - 80px);
    top: 80px;
  
    &__main {
      height: calc(100% - 40px);
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      gap: 30px;
  
      h3 {
        font-weight: 900;
      }
  
      .cart__none {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 100%;

  
        h3 {
          margin: 20px 0 0 0;
          font-weight: 900;
          max-width: 170px;
        }
  
        p {
          margin: 10px 0 0 0;
          color: rgb(49, 49, 49);
        }
      }

      .cart__yes {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;

        &::-webkit-scrollbar {
          width: 0;
        }
      }
  
      .cart__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 0;
  
        &-info {
          h4 {
            margin: 0;
            font-size: 16px;
          }
  
          p {
            margin: 5px 0;
            color: #757575;
          }
  
          span {
            font-size: 14px;
            color: #9e9b98;
          }
        }
        
        .counts {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          padding: 2px 10px;
          background: #EFEEED;

          .buttons {
            cursor: pointer;
            border: 0;
            font-weight: 500;
            font-size: 20px;
            padding: 0 5px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
      }

      .cart__item-data {
        display: flex;
        gap: 10px;
        align-items: center;

        img {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: #f8f7f5;
        }

        .title_data {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          
          p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          .priceAndMl {
            display: flex;
            gap: 5px;
            font-weight: 500; 

            span {
              color: #9e9b98;
            font-weight: 400; 
          }
          }
        }
      }
  
      .count {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: #f7f7f6;
        border-radius: 20px;
        color: #757575;
  
        span {
          font-size: 20px;
        }
      }
    }
  }
  </style>