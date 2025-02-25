<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Молоко, масло и яйца</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/50efe612-93ca-4f5b-972d-9f6175216741/928x928-webp",
         description: "Сгущёнка кокосовая протеиновая «Лавка 100»",
         weight: "200 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/cb08e69f-624e-4212-af31-ff6a42f68a93/928x928-webp",
         description: "Молоко 2,5% «Из Лавки»",
         weight: "900 мл"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2783132/430633f6-55e7-4279-992d-4f9636a23465/928x928-webp",
         description: "Молоко 3,2% «Из Лавки»",
         weight: "900 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/1c6469cb-36d7-4b3f-9c69-69644be60678/928x928-webp",
         description: "Яйцо куриное СО",
         weight: "10 шт"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/63136d4d-e859-4154-9c86-1b0492b1d157/928x928-webp",
         description: "Масло сладко-сливочное несолёное 82,5%",
         weight: "180 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/7221c081-ef27-4897-8d52-cd51bc393055/928x928-webp",
         description: "Молоко сгущённое цельное с сахаром",
         weight: "270 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/9112c88f-ab00-4f99-becb-dc06b037c77c/928x928-webp",
         description: "Напиток сывороточный с соком апельсин-лимон-грейпфрут",
         weight: "300 мл"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2805921/c4446775-2fe2-4dc5-b9c3-16d8ab860c17/928x928-webp",
         description: "Масло топлёное ГХИ",
         weight: "140 г"
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