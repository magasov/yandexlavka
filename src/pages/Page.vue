<template>
    <div class="mainPage">
      <div class="containerPage">
        <div class="containerNav">
          <ol>
            <li>
              <a href="/">Главная</a>
            </li>
            <span>></span>
            <li>
              <a href="#">Предмет</a>
            </li>
          </ol>
        </div>
        <div class="containerTitle">
          <div class="titlePage">
            <h1>{{ currentProduct.description }} <span>{{ currentProduct.weight }}</span></h1>  
          </div>
        </div>
        <div class="containerMain">
          <div class="containerLeft">
            <div class="mainImage">
              <img :src="currentProduct.image" alt="Product Image">
            </div>
            <div class="otherImage">
              <div class="miniImage" v-for="i in 3" :key="i"></div>
            </div>
          </div>
          <div class="containerRight">
            <div class="itemPrice">
              <span>{{ currentProduct.price }} ₽</span> 
              <button>В корзину</button>
            </div>
            <div class="weight1">
              <h1>На 100 г</h1>
            </div>
            <div class="itemWeight">
              <div class="weight2">
                <p>251</p>
                <span>ккал</span>
              </div>
              <div class="weight2">
                <p>10</p>
                <span>белки</span>
              </div>
              <div class="weight2">
                <p>7</p>
                <span>жиры</span>
              </div>
              <div class="weight2">
                <p>37</p>
                <span>углеводы</span>
              </div>
            </div>
            <div class="aboutItem">
              <h1>О товаре</h1>
              <div class="descriptionItem">
                <h3>Описание</h3>
                <p>{{ currentProduct.description }}</p>
              </div>
              <div class="structureItem">
                <h3>Состав</h3>
                <p>Мука пшеничная высший сорт, картофель отварной, сыр домашний рассольный...</p>
              </div>
              <div class="shelflifeItem">
                <h3>Срок годности, условия хранения</h3>
                <p>360 д., ниже -18C˚</p>
              </div>
              <div class="countryItem">
                <h3>Производитель, страна</h3>
                <p>ИП Аушев Мухаммад, Россия</p>
              </div>
              <div class="brandItem">
                <h3>Бренд</h3>
                <p>Из Лавки</p>
              </div>
            </div>
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
      window.scrollTo(0,0)
      
  
      const currentProduct = store.products
        .flatMap(product => product.items) 
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
    .containerOther{
        width: 960px;
        margin: 0 auto;
        margin-top: 32px;
        .cardOther{
           flex: 1;
            height: 390px;
            background-color: #f8f7f5;
            border-radius: 24px;
            padding: 0 0 10px 0;
            .discriptionOther{
                padding: 0px 12px 16px;
                span{
                    font-size: 16px;
                    color: #9E9B98;
                }
                p {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }
            .buttonOther{
                background-color: white;
                border: none;
                border-radius: 16px;
                width: 218px;
                height: 48px;
                margin: auto;
                button{
                    width: 218px;
                    height: 48px;
                    font-weight: 400;
                    font-size: 16px;
                    border-radius: 16px;
                    border: none;
                    background-color: white;
                    cursor: pointer;
                    &:hover{
                        background-color: #f8f7f5;
                    }
                }

            }
            img{
                height: 100%;
                width: 100%;
            }
        }
        .mainOther{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 8px;
            margin-top: 32px;
            .cardOther {
                &:hover {
                    background-color: hsla(30,3%,53%,.2);
                }
            }
        }
    }
    .containerMain{
        display: flex;
        margin-top: 32px;
    }
    .mainImage{
        width: 464px;
        height: 464px;
        border-radius: 40px;
        background-color: hsla(30, 35%, 53%, 0.1);

        img {
            width: 100%;
            height: 100%;
        }
    }
    .containerRight{
        width: 100%;

        .aboutItem{
            line-height: 21px;
            margin-top: 32px;
            h1{
                font-size: 21px;
                padding: 16px 0px;
                font-weight: 800;
                border-bottom: 1px solid hsla(30,3%,53%,.2);
            }
            h3{
                color: #9E9B98;
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
                margin-top: 18px;
            }
            p{
                margin-top: 4px;
                font-size: 17px;
            }
        }
        .itemWeight{
            display: flex;
            margin-left: 32px;
            .weight2{
                display: flex;
                flex-direction: column;
                margin-right: 32px;
                line-height: 21px;
                margin-top: 16px;
                p{
                    font-size: 20px;
                    font-weight: 500;
                }
                span{
                    font-size: 16px;
                    color: #9E9B98;
                }
            }
        }
        .weight1{
            margin-left: 32px;
            margin-top: 32px;
            border-bottom: 1px solid hsla(30,3%,53%,.2);
            h1{
            font-size: 21px;
            padding: 16px 8px;
            font-weight: 700;
            }
        }
        .itemPrice{
        width: 512px;
        height: 90px;
        border-radius: 32px 32px 32px 32px;
        display: flex;
        justify-content: space-between;  
        margin-left: 8px;
        align-items: center;
        border: 1px solid hsla(30,3%,53%,.2);
            span{
                color: #FC5230;
                font-size: 32px;
                font-weight: 600;
                padding: 28px 0px 28px 28px;
            }
            button{
                background-color: #FCE000;
                border: none;
                width: 200px;
                height: 56px;
                border-radius: 20px 20px 20px 20px;
                margin-right: 16px;
                font-weight: 400;
                font-size: 18px;
                cursor: pointer;
            }
        }
        .aboutItem{
            margin-left: 32px;
        }
    }

    .mainPage {
        width: 960px;
        margin: 0 auto;
    }

    .containerNav{
        margin-top: 32px;
        margin-bottom: 12px;
        color: #9E9B98;
        display: flex;
        justify-content: flex-start;
        ol{
            display: flex;
        }
        li :hover{
            color: #000000;
        }
        span{
            padding: 0 4px;
        }
    }
    .containerTitle{
        display: flex;
        .titlePage{
            display: inline;
            line-height: 44px;

            h1{
                font-weight: 800;
                font-size: 48px;
                display: inline;
            }
            span{
                font-size: 16px;
                color: #9E9B98;
                display: inline;
                font-weight: 800;
                font-size: 48px;
            }
        }
    }
</style>

