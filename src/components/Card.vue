<template>
  <div class="mainOther">
    <div v-for="item in items" :key="item.id" class="cardOther" @click="goToProductPage(item.id)">
      <div class="imgOther">
        <img :src="item.image" :alt="item.description">
      </div>
      <div class="discriptionOther">
        <h3>{{ item.price }} ₽</h3>
        <p>{{ item.description }}</p>
        <span>{{ item.weight }}</span>
      </div>
      <div class="buttonOther">
        <button @click.stop="addToCart(item)">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['item-added']);

const router = useRouter();

const goToProductPage = (id) => {
  router.push(`/product/${id}`);
};

const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  emit('item-added', cart); 
};
</script>

  
  <style lang="scss" scoped>
  .cardOther {
    flex: 1;
    height: 390px;
    background-color: #f8f7f5;
    border-radius: 24px;
    padding: 0 0 10px 0;
    cursor: pointer;

    .discriptionOther {
      padding: 0px 12px 16px;
      height: 90px;
      span {
        font-size: 16px;
        color: #9e9b98;
      }
      p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      h3 {
        font-weight: 500;
      }
    }
    .buttonOther {
      background-color: white;
      border: none;
      border-radius: 16px;
      width: 218px;
      height: 48px;
      margin: auto;
      button {
        width: 218px;
        height: 48px;
        font-weight: 400;
        font-size: 16px;
        border-radius: 16px;
        border: none;
        background-color: white;
        cursor: pointer;
        &:hover {
          background-color: #f8f7f5;
        }
      }
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 24px 24px 0 0;
    }
  }
  .mainOther {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 32px;
    .cardOther {
      &:hover {
        background-color: hsla(30, 3%, 53%, 0.2);
      }
    }
  }
  </style>