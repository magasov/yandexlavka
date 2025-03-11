<template>
     <!-- <h1>{{  }} <span>{{ currentProduct.weight }}</span></h1>   -->
    <div class="container__recipes">
        <div class="one_recipes">
            <div class="recipes__viedeo">
                <video class="v1q7le2h" loop playsinline autoplay muted>
                    <source :src="currentProduct.video" type="video/mp4">
                </video>
            </div>
            <div class="recipes__info">
                <div class="recipes_category" ><span v-for="item in currentProduct.category">{{ item }}</span></div>
                <h1 class="recipes__title">{{ currentProduct.title }}</h1>
                <p class="recipes__desc">{{ currentProduct.description }}</p>
                <div class="recipes__info-time">
                    <div class="times">
                        <p>{{ currentProduct.totaltime }}</p>
                        <span>общее время готовки</span>
                    </div>
                    <div class="times">
                      <p>{{ currentProduct.activetime }}</p>
                        <span>активная готовка</span>
                    </div>
                    <div class="times">
                      <p>{{ currentProduct.slozhnost }}</p>
                        <span>сложность рецепта</span>
                    </div>
                </div>
                <div class="redacia_home">
                    <img src="../assets/icons/logomini.svg" alt="">
                    
                    <div class="redakcia">
                        <h3>Редакция Лавки</h3>
                        <p>Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами</p>
                    </div>
                </div>

                <div class="categories__receptes">
                    <RouterLink>Все рецепты</RouterLink>
                    <RouterLink>Десерты</RouterLink>
                    <RouterLink>Фрукты и ягоды</RouterLink>
                    <RouterLink>За 15 минут</RouterLink>
                </div>
            </div>

        </div>
    </div>
  </template>
  
  <script>
  import { useProductsStore } from '../stores/counter.js'; 
  
  export default {
    name: 'Page',
    data() {
      const store = useProductsStore();
      const productId = this.$route.params.id;
  
      const currentProduct = store.products
        .flatMap(product => product.recipes) 
        .find(item => item.id === Number(productId));
  
      if (!currentProduct) {
        this.$router.push('/404'); 
      }
  
      return {
        currentProduct
      };
    }
  }
  </script>

  

<style scoped lang="scss">
    .container__recipes {
        max-width: 960px;
        font-family: 'Yandex Sans Text';
        margin: 20px auto;

        .one_recipes {
            display: flex;
            gap: 40px;

            .recipes__viedeo {

                video {
                border-radius: 30px;
                height: 800px;
                }
            }

            .recipes__info {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .recipes_category {
                    display: flex;
                    gap: 10px;
                    color: rgb(146, 146, 146);
                }
                
                .recipes__title {
                    margin: 10px 0 0 0;
                    font-size: 50px;
                    line-height: 45px;
                    font-weight: 800;
                }

                .recipes__desc {
                    font-size: 20px;
                }

                .recipes__info-time {
                    display: flex;
                    gap: 30px;
                    border-top: 1px solid rgb(228, 227, 227);
                    padding: 20px 0;
                    border-bottom: 1px solid rgb(228, 227, 227);

                    

                    .times {
                        width: 102px;
                        display: flex;
                        flex-direction: column;
                        gap: 5px;

                        p {
                            font-weight: 400;
                            font-size: 18px;
                        }

                        span {
                            color: rgb(146, 146, 146);
                        }
                    }
                }

                .redacia_home {
                    display: flex;
                    gap: 15px;
                    padding: 0 0 20px 0;
                    border-bottom: 1px solid rgb(228, 227, 227);

                    img {
                        width: 72px;
                        height: 72px;
                    }

                    h3 {
                        font-weight: 500;
                        font-size: 20px;
                    }

                    .redakcia {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }

                    p {
                        color: rgb(146, 146, 146);
                        font-size: 14px;
                    }
                }

                .categories__receptes {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;

                    a {
                        padding: 10px 15px;
                        text-wrap: nowrap;
                        background: #EFEEED;
                        border-radius: 10px;
                        font-weight: 500;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        transition: all .3s ease;

                        &:hover {
                            background: #dbdbdb;
                        }
                    }
                }
            }
        }
    }
</style>

