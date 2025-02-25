<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Мясо, рыба и курица</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2888787/aa0bac94-59fc-4228-bf03-4c3b11e4862b/928x928-webp",
         description: "Мякоть бедра цыплёнка-бройлера с овощами",
         weight: "700 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2998515/940a6cf8-84ce-45b3-9cb3-db598a6c402b/928x928-webp",
         description: "Голень куриная «Ферма Евгения Рошаля» охлаждённая",
         weight: "600 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2805921/fbd9102a-853c-4227-a185-9261042a8f90/928x928-webp",
         description: "Печень цыплёнка-бройлера «Троекурово»",
         weight: "500 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/80649eac-ab27-4b86-a36a-bee38956cc8f/928x928-webp",
         description: "Стейкбургер с чёрным перцем «Из Лавки»",
         weight: "360 г"
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