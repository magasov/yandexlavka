<template>
   <div class="home container">
    <Catalog/>
    <main>
        <div class="containerItem">
            <h1>Мандарины</h1>
            <div class="mainOther">
                <a v-for="(item, index) in items" :key="index" href="#">
                    <div class="cardOther">
                        <div class="imgOther">
                            <img :src="item.image" alt="#">
                        </div>
                        <div class="discriptionOther">
                            <h3>{{ item.price }}</h3>
                            <p>{{ item.description }}</p>
                            <span>{{ item.weight }}</span>
                        </div>
                        <div class="buttonOther">
                            <button>В корзину</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </main>
    <Cart/>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import Cart from "@/components/Cart.vue";
import Catalog from "../components/Catalog.vue";
 

const items = ref([
    {
        image: "https://yastatic.net/avatars/get-grocery-goods/2783132/b1d82b7b-ca09-41fd-9bf5-00b8a176572e/464x464-webp",
        price: "174₽",
        description: "Мандари­ны Сатцу­ма Из Лавки",
        weight: "600 г"
    },
    {
        image: "https://yastatic.net/avatars/get-grocery-goods/2750890/a0f8c627-1b06-4bf4-9478-d2d10291a1df/928x928-webp",
        price: "195 ₽",
        description: "Мандарины Марроко",
        weight: "1 кг"
    },	
    {
        image: "https://yastatic.net/avatars/get-grocery-goods/2783132/2e107bc0-fea7-4733-bce4-3645bc5396fa/928x928-webp",
        price: "125 ₽",
        description: "Мандарины с листочком",
        weight: "500 г"
    },
    {
        image: "https://yastatic.net/avatars/get-grocery-goods/2888787/4d197700-6e23-4d92-b36e-a800ef145c86/928x928-webp",
        price: "174 ₽",
        description: "Мандарины Турция",
        weight: "1 кг"
    },
    {
        image: "https://yastatic.net/avatars/get-grocery-goods/2750890/96a0a695-04c3-43b6-91ac-11d116eb8390/464x464-webp",
        price: "181 ₽",
        description: "Апельсины сладкие",
        weight: "500 г"
    },
]);
</script>

<style lang="scss" >
.containerItem{
        width: 960px;
        margin: 0 auto;
        margin-top: 32px;
        h1{
            font-style: 29px;
            font-weight: 800;
        }
        .cardOther{
           flex: 1;
            height: 390px;
            background-color: #f8f7f5;
            border-radius: 24px;
            padding: 0 0 10px 0;
            .discriptionOther{
                padding: 0px 12px 16px;
                height: 90px;
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
                h3{
                    font-weight: 500;
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
</style>