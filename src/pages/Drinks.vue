<template>
    <div class="home container">
     <Catalog/>
     <main>
         <div class="containerItem">
             <h1>Вода</h1>
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
         image: "https://yastatic.net/avatars/get-grocery-goods/2783132/2bba3542-52d7-4b95-8ec8-7bac303f1b87/464x464-webp",
         description: "Вода негазированная Горная природная питьевая",
         weight: "1,5 л",
         price: "41₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2783132/616795ca-9ea3-435a-b7f3-b55f0203029e/928x928-webp",
         description: "Вода минеральная газированная природная питьевая",
         weight: "1,5 л",
         price: "41₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/8ab55f6e-0172-4696-8b1f-35d3b5ce0a6c/928x928-webp",
         description: "Вода детская с рождения негазированная",
         weight: "1,5 л",
         price: "38₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2783132/4ef1d7f2-3902-410a-b100-6858e7fddd38/928x928-webp",
         description: "Вода негазированная Горная природная питьевая",
         weight: "5 л",
         price: "90₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2750890/6a5822f6-1349-4dbc-a640-7a84cde731cd/928x928-webp",
         description: "Вода минеральная лечебно-столовая Borjomi газированная",
         weight: "750 мл",
         price: "114₽",
     },
     {
         image: "https://yastatic.net/avatars/get-grocery-goods/2783132/0579855b-67d5-4e03-8743-d7f768ea7a26/928x928-webp",
         description: "Вода минеральная Donat Mg газированная",
         weight: "1 л",
         price: "134₽",
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