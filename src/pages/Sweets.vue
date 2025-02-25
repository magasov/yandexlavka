<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Сладкое и снеки</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/943cfd2a-abfd-4b02-925d-d8768bc8b9c5/928x928-webp",
         description: "Попкорн сладкий апельсин",
         weight: "100 г",
         price: "62₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2888787/fb8f22fc-ce06-4ecb-a2c9-f18c6aedd28c/464x464-webp",
         description: "Крекеры льняные хрустящие Флакс-кубики со вкусом аджики",
         weight: "40 г",
         price: "41₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/6247604/9a51faca-f95c-4c4c-851b-bf37e332d21e/928x928-webp",
         description: "Сыр Чечил Домашний соломка 40%",
         weight: "90 г",
         price: "122₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2888787/968933a5-9420-45d0-8a9a-8896c3a5c0ec/464x464-webp",
         description: "Чипсы картофельные Lays рифлёные гребешки в сливочном соусе",
         weight: "100 г",
         price: "124₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/ac020070-dfa0-436c-8b33-322d777f811e/928x928-webp",
         description: "Снеки кукурузные Cheetos сыр",
         weight: "50 г",
         price: "79₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2888787/aee84490-ce1e-4ba8-8cca-b7e45e656317/928x928-webp",
         description: "Снеки остро-пряные Yopokki",
         weight: "50 г",
         price: "235₽",
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
                 border-radius: 24px 24px 0 0;
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