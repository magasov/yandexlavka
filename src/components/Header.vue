<template>
  <header>
    <router-link :to="'/'"><img src="../assets/icons/logo.svg" alt="logo" /></router-link>
    <div class="catalog">
      <span>
        <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v1zm0 5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v1zm.5 5.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-15z" fill="currentColor"></path>
        </svg>
      </span>
      Каталог
    </div>
    <div class="input">
      <span>
        <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#21201F" fill-rule="evenodd" clip-rule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7zm18 11a1 1 0 000-1.414l-3.975-3.975A8.948 8.948 0 0020 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 005.611-1.975L20.586 22A1 1 0 0022 22z"></path>
        </svg>
      </span>
      <input
        type="text"
        placeholder="Найти в Вай-Лавке"
        v-model.trim="searchQuery"
        @input="filterProducts"
        @focus="isSearchFocused = true"
        @blur="isSearchFocused = false"
      />
      <div class="search-results" v-if="searchQuery ">
        <div v-for="product in filteredProducts" :key="product.id" class="product-search">
          <router-link 
            :to="`/product/${product.id}`"
            @click="selectProduct"
          >
            <img :src="product.image" alt="product" />
            <div class="product-info">
              <div class="product-name">{{ product.description }}</div>
              <div class="product-price">{{ product.price }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="catalog btnadress">
      <span>
        <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5286 6.62528C18.7014 6.21275 18.2871 5.79823 17.8745 5.97084L3.30704 12.0649C3.12106 12.1427 3 12.3246 3 12.5262V12.7219C3 12.9284 3.12687 13.1136 3.31937 13.1882L9.08 15.42L11.3032 21.18C11.3776 21.3728 11.563 21.5 11.7696 21.5H11.9651C12.1666 21.5 12.3484 21.379 12.4263 21.1932L18.5286 6.62528Z" fill="currentColor"></path>
        </svg>
      </span>
      Укажите адрес доставки
    </div>

    <div class="catalog btnsort" @click="isCatalogModalOpen = true">
      <span>
        <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="6" width="11" height="2" rx="0.5" fill="currentColor"></rect>
          <rect x="2" y="6" width="3" height="2" rx="0.5" fill="currentColor"></rect>
          <rect x="3" y="16" width="10" height="2" rx="0.5" fill="currentColor"></rect>
          <rect x="19" y="16" width="3" height="2" rx="0.5" fill="currentColor"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7ZM8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3Z" fill="currentColor"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17ZM16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13Z" fill="currentColor"></path>
        </svg>
      </span>
    </div>

    <div v-if="isCatalogModalOpen" class="overflow" @click.self="isCatalogModalOpen = false">
      <div class="popup__catalog">
        <h1>Что отметить в составе товара?</h1>
        <p>У товаров с выбранными ингредиентами появится значок в каталоге</p>
        <div class="products">
          <div v-for="(product, index) in products" :key="index" class="product">
            <img :src="product.image" :alt="product.name" />
            <div class="product_name">{{ product.name }}</div>
          </div>
        </div>
        <button class="btn_close" @click="isCatalogModalOpen = false">Закрыть</button>
      </div>
    </div>

    <div @click="toggleAuthModal">
      <span class="catalog auth" v-if="isUserLoggedIn">Выйти</span>
      <span class="catalog auth" v-else>Войти</span>
    </div>
  </header>

  <div v-if="isAuthModalOpen" class="overflow" @click.self="closeAuthModal">
    <div class="popup__auth">
      <img class="logo" src="../assets/icons/logo.svg" alt="Логотип" />
      <span><h1>Войти c помощью телефона</h1></span>
      <div class="input_auth">
        <input
          type="tel"
          v-model="phone"
          placeholder="+7 (___) ___-__-__"
          @input="formatPhone"
          maxlength="18"
        />
      </div>
      <button class="btn_auth" @click="login" :disabled="!isPhoneValid">Войти</button>
      <span class="m_face">
        <button class="btn_face">
          <img src="https://yastatic.net/s3/passport-static/core/v1.198.0/i/authv2/fingerprint-icon.svg" />
          По лицу или отпечатку
        </button>
      </span>
      <button class="btn_id">Создать ID</button>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { useProductsStore } from '@/stores/counter';

export default {
  data() {
    return {
      isAuthModalOpen: false,
      phone: '',
      isUserLoggedIn: false,
      searchQuery: '',
      filteredProducts: [],
      isSearchFocused: false,
      isCatalogModalOpen: false,
      products: [
        { name: "Яйца", image: "https://yastatic.net/avatars/get-bunker/60661/2884c8c2119741e4315d98aec8c2b3233818eabe/orig" },
        { name: "Рыба", image: "https://yastatic.net/avatars/get-bunker/998550/a79be3f1a7e48ebca29fea15b846d208ee3e31f9/orig" },
        { name: "Орехи", image: "https://yastatic.net/avatars/get-bunker/998550/09a3edc56e91a73f9447fd1eb5c64981a1ceeddb/orig" },
        { name: "Глютен", image: "https://yastatic.net/avatars/get-bunker/118781/90cde6132b5bfc06264e997d4f288d0048cacdef/orig" },
        { name: "Арахис", image: "https://yastatic.net/avatars/get-bunker/49769/c8942670d9e582c008c1ea1fdef1ceccfa63341c/orig" },
        { name: "Курица", image: "https://yastatic.net/avatars/get-bunker/60661/e108f3c0e6abed3e6ef325665b9d1e85f8938f75/orig" },
        { name: "Молоко", image: "https://yastatic.net/avatars/get-bunker/998550/584497888ffe6350bb66ec10dce02ec7ec5bf149/orig" },
        { name: "Кинза", image: "https://yastatic.net/avatars/get-bunker/50064/8fac952d8e8fb03a1d2110fada5ebf4aaca0eddd/orig" },
        { name: "Говядина", image: "https://yastatic.net/avatars/get-bunker/998550/05ef2d82088f84bae8b50a8614ca9a6c2b3df5c6/orig" },
        // { name: "Свинина", image: "https://yastatic.net/avatars/get-bunker/56833/76c7a269e952443be0b102c5e62f322c0564cc18/orig" },
        { name: "Мёд", image: "https://yastatic.net/avatars/get-bunker/998550/befb4830e9f4d615546a56669895ec8757ceae68/orig" },
        { name: "Лук", image: "https://yastatic.net/avatars/get-bunker/998550/cf856e23a7d095442694904a7f2006961ad44849/orig" },
        { name: "Сахар", image: "https://yastatic.net/avatars/get-bunker/60661/f5d2abdbeb468020d71547095d24b3ed38f7b52d/orig" },
        { name: "Помидоры", image: "https://yastatic.net/avatars/get-bunker/56833/87ef1a48978fa5a0e74abd72236f9c68f8a2258d/orig" },
        { name: "Море-продукты", image: "https://yastatic.net/avatars/get-bunker/56833/9f98c08f57e1f8e95a6496c56bd566fb6c412e62/orig" },
        { name: "Сладкий перец", image: "https://yastatic.net/avatars/get-bunker/49769/4dd4d242cf9522187b69ac4d0cd4ca754ed11f84/orig" },
        { name: "Чеснок", image: "https://yastatic.net/avatars/get-bunker/50064/4507a83dfa1c4739216d095c3857e4655a2cb409/orig" },
        { name: "Грибы", image: "https://yastatic.net/avatars/get-bunker/49769/a632618057c03efd59f8bc3193ec1cfe4d5aff4b/orig" },
        { name: "Без мяса", image: "https://yastatic.net/avatars/get-bunker/61205/30447ee702d22ac90e2179eaf41f9e61596f48a5/orig" },
        { name: "Мало калорий", image: "https://yastatic.net/avatars/get-bunker/128809/97e4179ed0480cb116fa2655a587e338b03d4720/orig" },
        { name: "Острое", image: "https://yastatic.net/avatars/get-bunker/998550/dcc7273908a618e0d2745d7a76f65d8fb5d1b33d/orig" },
        { name: "Много белка", image: "https://yastatic.net/avatars/get-bunker/61205/cb6ee3a9ee1a8af5bccc801e88fe077a3789cace/orig" },
        { name: "Мало углеводов", image: "https://yastatic.net/avatars/get-bunker/61205/ec62b55738074087cd551c2bd4acbee59a3cde39/orig" },
      ]
    };
  },

  computed: {
    isPhoneValid() {
      const digits = this.phone.replace(/\D/g, '');
      return digits.length === 11 && digits.startsWith('7');
    }
  },

  mounted() {
    this.isUserLoggedIn = localStorage.getItem("user") !== null;
  },

  methods: {
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, ''); 
      
      if (value.length > 0 && !['7', '8'].includes(value[0])) {
        value = '7';
      }
      
      if (value.startsWith('8')) {
        value = '7' + value.slice(1);
      }
      
      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      let formatted = '+7';
      if (value.length > 1) {
        formatted += ' (' + value.slice(1, 4);
      }
      if (value.length > 4) {
        formatted += ') ' + value.slice(4, 7);
      }
      if (value.length > 7) {
        formatted += '-' + value.slice(7, 9);
      }
      if (value.length > 9) {
        formatted += '-' + value.slice(9, 11);
      }

      this.phone = formatted;
    },

    filterProducts() {
      const store = useProductsStore();
      const allProducts = store.products.flatMap(category => category.items);
      this.filteredProducts = allProducts.filter(product =>
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    selectProduct() {
      setTimeout(() => {
        this.isSearchFocused = false;
        this.searchQuery = ''; 
      }, 100); 
    },

    toggleAuthModal() {
      if (this.isUserLoggedIn) {
        localStorage.removeItem("user");
        this.isUserLoggedIn = false;
        router.push('/');
      } else {
        this.isAuthModalOpen = !this.isAuthModalOpen;
      }
    },

    closeAuthModal() {
      this.isAuthModalOpen = false;
      this.phone = '';
    },

    login() {
      if (this.isPhoneValid) {
        const phoneDigits = this.phone.replace(/\D/g, '');
        localStorage.setItem("user", phoneDigits);
        this.isUserLoggedIn = true;
        this.isAuthModalOpen = false;
        this.phone = '';
        router.push('/');
      }
    }
  }
};
</script>


<style lang="scss" scoped>

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;

  .product {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 8px;
    }

    .product-info {
      flex: 1;

      .product-name {
        font-size: 14px;
        font-weight: 500;
      }

      .product-price {
        font-size: 12px;
        color: #666;
      }
    }
  }

}



header {
  display: flex;
  padding: 0 20px;
  height: 79px;
  border-bottom: 1px solid rgb(241, 241, 241);
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;

  .input {
    flex: 1;
    border-radius: 16px;
    background: #efeeed;
    height: 48px;
    display: flex;
    align-items: center;

    span {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 24px;
      }
    }

    input {
      width: 100%;
      height: 100%;
      border: 0;
      background: transparent;
      font-size: 15px;

      &::placeholder {
        color: rgb(148, 148, 148);
      }

      &:focus {
        outline: none;
      }
    }
  }

  .product-search {
    a {
      padding: 20px;
      gap: 10px;
      display: flex;
    align-items: center;
    img {
      width: 50px;
    }
    }
  }
 
  .catalog {
    height: 48px;
    padding: 0 20px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
      width: 24px;
      display: flex;
      align-items: center;
    }
  }

  .btnadress {
    border: 0;
    background: #fce000;

    &:hover {
      background: #f1d702;
    }
  }

  .btnsort {
    border: 0;
    transition: all 0.2s ease;
    padding: 0 13px;

    &:hover {
      background: #f4f4f4;
    }
  }

  .auth {
    border: 0;
    background: #f4f4f4;
    transition: all 0.2s ease;

    &:hover {
      background: #e7e7e7;
    }
  }
}

.overflow {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #0000008a;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .input_auth {
    padding-top: 24px;
    input {
      width: 264px;
      height: 52px;
      font-size: 20px;
      padding-left: 22px;
      border-radius: 20px;

      &::placeholder {
        color: rgba(147, 156, 176, 0.4);
      }
    }
  }

  .logo img {
    width: 127px;
    height: 32px;
  }
  .popup__auth {
    width: 100%;
    max-width: 312px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    border-radius: 20px;
    padding: 32px;
    align-items: center;
    h1 {
      font-size: 20px;
      font-weight: 500;
    }
    .btn_auth {
      width: 286px;
      height: 56px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      background-color: #292933;
      border-radius: 20px;
      cursor: pointer;
    }
    .m_face {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn_face {
      width: 286px;
      height: 56px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      background-color: #c0c0c05a;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      display: flex;
      column-gap: 8px;
      span {
        width: 24px;
        height: 24px;
      }
    }
    .btn_id{
      width: 286px;
      height: 56px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      background-color: transparent;
      border-radius: 20px;
      border: 1px solid #292933;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      display: flex;
      column-gap: 8px;
    }
  }
}

.popup__catalog {
  border-radius: 32px;
  position: relative;
  width: 568px;
  height: 580px;
  max-width: 800px;
  background: #fff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;

  h1 {
    font-size: 29px;
    font-weight: 800;
  }
  p{
    margin: 0;
    font-size: 16px;
    color: #9e9b98;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 8px;
    row-gap: 8px;

    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 88px;
      height: 100px;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .product_name{
        display: flex;
        align-items: center;
        justify-items: center;
        height: 100%;
        text-align: center;
        font-size: 13px;
        padding: 0 8px;
        font-weight: 600;
        height: 48px;
      }
    }
  }

  .btn_close {
    min-width: 200px;
    width: 200px;
    padding: 15px 0;
    background: #fce000;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 16px;
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>
