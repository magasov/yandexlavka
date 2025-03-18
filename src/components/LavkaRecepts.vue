<template>
  <div class="lavkarecept">
    <h3>Рецепты Вай Лавки</h3>
    <div class="lavkarecept__card">
      <div v-if="currentIndex > 0" class="recipes__left" @click="prevSlide">
        <svg
          class="i1rjkic7"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.8 11l5.246-5.246a.5.5 0 000-.708l-.692-.692a.5.5 0 00-.708 0L4 12l7.646 7.646a.5.5 0 00.708 0l.692-.692a.5.5 0 000-.708L7.8 13h11.7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H7.8z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div class="recipes__wrapper">
        <div class="recipes__content" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <router-link
            v-for="(recipe, index) in recipes"
            :key="index"
            :to="'/recipes/' + recipe.id"
            class="lavkarecepts"
          >
            <div class="lavkarecepts__text">
              <p>{{ recipe.name }}</p>
              <span>{{ recipe.time }}</span>
            </div>
            <img :src="recipe.image" alt="card" />
          </router-link>
        </div>
      </div>

      <div v-if="currentIndex * itemsPerPage + itemsPerPage < recipes.length" class="recipes__right" @click="nextSlide">
        <svg
          class="i1rjkic7"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 11.5a.5.5 0 01.5-.5h11.7l-5.246-5.246a.5.5 0 010-.708l.692-.692a.5.5 0 01.708 0L20 12l-7.646 7.646a.5.5 0 01-.708 0l-.692-.692a.5.5 0 010-.708L16.2 13H4.5a.5.5 0 01-.5-.5v-1z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LavkaRecepts",
  data() {
    return {
      recipes: [
        { id: 1, name: "Персики-гриль с мороженым", time: "15 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2805921/c87023dc-e76d-4259-acab-f0f4ff7e060c/392x588?webp=true" },
        { id: 2, name: "Мак энд чиз", time: "1 ч", image: "https://yastatic.net/avatars/get-grocery-goods/2805921/70f6369b-0702-4db1-96e4-957c3cae304b/392x588?webp=true" },
        { id: 3, name: "Салат с креветками и авокадо", time: "30 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2791769/c0885154-80cc-4956-8959-6a8cba12d1e5/392x588?webp=true" },
        { id: 4, name: "Грибной крем-суп", time: "30 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2888787/08041da3-5f68-47f8-9901-0ff21dfb0734/392x588?webp=true" },
        { id: 5, name: "Кускус с запечёнными овощами", time: "25 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2998515/e5338bef-84e4-4b67-ad6a-6d8019e303a4/392x588?webp=true" },
        { id: 6, name: "Простой рецепт блинчи­ков", time: "30 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2756334/b0247e63-df6c-4026-8996-acb7a89f9d20/392x588?webp=true" },
        { id: 7, name: "Камам­бер на гриле с соусом из фиников", time: "40 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2888787/d293d323-b1e0-4764-ba15-ac87f466413c/392x588?webp=true" },
        { id: 8, name: "Томат­ный салат", time: "15 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2805921/2f2a2dbe-0087-4a8a-b14f-d29dfca37c63/392x588?webp=true" },
        { id: 9, name: "Цезарь с курицей или кревет­ками", time: "1 ч", image: "https://yastatic.net/avatars/get-grocery-goods/2888787/d39c2010-4273-4375-9dd4-27096ee982ab/392x588?webp=true" },
        { id: 10, name: "Мясо в экспресс-марина­де", time: "1 ч 30 мин", image: "https://yastatic.net/avatars/get-grocery-goods/2998515/df3308f2-37ad-4b7a-8e01-55363960c272/392x588?webp=true" },
      ],
      currentIndex: 0,
      itemsPerPage: 5,
    };
  },
  methods: {
    nextSlide() {
      if ((this.currentIndex + 1) * this.itemsPerPage < this.recipes.length) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lavkarecept {
  display: flex;
  flex-direction: column;
  gap: 20px;


  h3 {
    font-weight: 800;
    font-size: 25px;
  }

  &__card {
    width: 100%;
    display: flex;
    position: relative;
  }

  .recipes__wrapper {
    overflow: hidden;
    width: 100%;
  }

  .recipes__content {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    gap: 8px;
  }

  .lavkarecepts {
    flex: 0 0 calc(20% - 8px);
    height: 255px;
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    transition: 0.3s ease;

    &:hover {
      border-radius: 20px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    &__text {
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
      z-index: 2;
      padding: 20px;
      font-weight: 600;
      font-size: 14px;
      color: #fff;
      
      p {
        text-shadow: 0 0 10px white;
      }
      span {
        color: rgb(209, 209, 209);
        text-shadow: 0 0 10px rgb(209, 209, 209);
      }
    }
  }

  .recipes__left,
  .recipes__right {
    position: absolute;
    top: 46%;
    cursor: pointer;
    width: 44px;
    height: 44px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 30px rgba(100, 100, 100, 0.322);
    z-index: 2;
    svg {
      width: 24px;
    }
  }

  .recipes__left {
    left: -35px;
  }

  .recipes__right {
    right: -35px;
  }
}
</style>