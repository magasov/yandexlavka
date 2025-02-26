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
                <p>{{item.description}}</p>
                <div class="priceAndMl">
                  <p>{{ item.price }}</p>
                  <span>·</span>
                  <span>{{ item.weight }}</span>
                </div>
              </div>
            </div>
            <button @click="removeFromCart(item.id)">Удалить</button>
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
  
  // Загрузка корзины из localStorage
  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.value = cart;
  };
  
  // Удаление товара из корзины
  const removeFromCart = (itemId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Обновляем состояние корзины
  };
  
  // Загружаем корзину при монтировании компонента
  onMounted(() => {
    loadCart();
  });
  </script>
  
  <style lang="scss" scoped>
  .cart {
    flex: 2;
    height: max-content;
    position: sticky;
    height: calc(100vh - 80px);
    top: 80px;
  
    &__main {
      height: calc(100% - 40px);
      display: flex;
      padding: 20px 0;
      flex-direction: column;
  
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
        justify-content: space-between;
        align-items: center;
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
  
        button {
          background-color: #ff4444;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
  
          &:hover {
            background-color: #cc0000;
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
          padding:  4px;
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