<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Хлеб</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/6087c5b8-4fa2-4a11-ab99-f1df9dda5260/928x928-webp",
         description: "Хлеб пшеничный «Из Лавки» с чесночным маслом и зеленью",
         weight: "240 г",
         price: "144₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/8ddff13e-bc20-4978-867c-d54a0b5f2bd8/464x464-webp",
         description: "Хлеб белково-полбяной многозерновой «Из Лавки»",
         weight: "250 г",
         price: "125₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/6bed5f92-f347-4352-bc53-c77a2866693f/928x928-webp",
         description: "Хлеб мультизерновой заварной",
         weight: "390 г",
         price: "125₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/e426a8e9-ea0c-498b-814f-0e82d1248676/464x464-webp",
         description: "Хлеб пшеничный луковый",
         weight: "335 г",
         price: "122₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/5a3027f7-ae7f-4960-b283-0344605f095f/928x928-webp",
         description: "Багет с чесночным маслом",
         weight: "160 г",
         price: "90₽",
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