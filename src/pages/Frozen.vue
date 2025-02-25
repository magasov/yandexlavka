<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Эскимо и батончики</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2756334/18c10bb1-bd3b-4fda-8ca8-665d50b35cc8/928x928-webp",
         description: "Мороженое молочное Snickers с карамелью и арахисом в глазури эскимо",
         weight: "65 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/9cfabe00-127c-449b-81d9-61fb9126d44f/928x928-webp",
         description: "Мороженое молочное Bounty в глазури эскимо",
         weight: "65 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2805921/e67e608b-dd76-4015-981e-fe3b3a923bd5/928x928-webp",
         description: "Мороженое «Магнат» манго и красные ягоды эскимо",
         weight: "74 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2805921/4c013f24-f29a-4d81-a630-f8a001e19107/928x928-webp",
         description: "Мороженое Эkzo дрaгонфрут-гуанабана эскимо",
         weight: "70 г"
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2756334/3715afbb-3546-4971-9950-1df8c35a6764/464x464-webp",
         description: "Мороженое ванильное Milka с молочным шоколадом в глазури эскимо",
         weight: "62 г"
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