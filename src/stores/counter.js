import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      "category": "bakery",
      "items": [
        {
          "id": 1,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/6087c5b8-4fa2-4a11-ab99-f1df9dda5260/928x928-webp",
          "description": "Хлеб пшеничный «Из Лавки» с чесночным маслом и зеленью",
          "weight": "240 г",
          "price": "144₽"
        },
        {
          "id": 2,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/8ddff13e-bc20-4978-867c-d54a0b5f2bd8/464x464-webp",
          "description": "Хлеб белково-полбяной многозерновой «Из Лавки»",
          "weight": "250 г",
          "price": "125₽"
        },
        {
          "id": 3,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/6bed5f92-f347-4352-bc53-c77a2866693f/928x928-webp",
          "description": "Хлеб мультизерновой заварной",
          "weight": "390 г",
          "price": "125₽"
        },
        {
          "id": 4,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/e426a8e9-ea0c-498b-814f-0e82d1248676/464x464-webp",
          "description": "Хлеб пшеничный луковый",
          "weight": "335 г",
          "price": "122₽"
        },
        {
          "id": 5,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/5a3027f7-ae7f-4960-b283-0344605f095f/928x928-webp",
          "description": "Багет с чесночным маслом",
          "weight": "160 г",
          "price": "90₽"
        }
      ]
    },
    {
      "category": "dairy",
      "items": [
        {
          "id": 6,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/50efe612-93ca-4f5b-972d-9f6175216741/928x928-webp",
          "description": "Сгущёнка кокосовая протеиновая «Лавка 100»",
          "weight": "200 г",
          "price": "250₽"
        },
        {
          "id": 7,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/cb08e69f-624e-4212-af31-ff6a42f68a93/928x928-webp",
          "description": "Молоко 2,5% «Из Лавки»",
          "weight": "900 мл",
          "price": "62₽"
        },
        {
          "id": 8,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/430633f6-55e7-4279-992d-4f9636a23465/928x928-webp",
          "description": "Молоко 3,2% «Из Лавки»",
          "weight": "900 г",
          "price": "66₽"
        },
        {
          "id": 9,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/1c6469cb-36d7-4b3f-9c69-69644be60678/928x928-webp",
          "description": "Яйцо куриное СО",
          "weight": "10 шт",
          "price": "110₽"
        },
        {
          "id": 10,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/63136d4d-e859-4154-9c86-1b0492b1d157/928x928-webp",
          "description": "Масло сладко-сливочное несолёное 82,5%",
          "weight": "180 г",
          "price": "175₽"
        },
        {
          "id": 11,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/7221c081-ef27-4897-8d52-cd51bc393055/928x928-webp",
          "description": "Молоко сгущённое цельное с сахаром",
          "weight": "270 г",
          "price": "100₽"
        },
        {
          "id": 12,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/9112c88f-ab00-4f99-becb-dc06b037c77c/928x928-webp",
          "description": "Напиток сывороточный с соком апельсин-лимон-грейпфрут",
          "weight": "300 мл",
          "price": "45₽"
        },
        {
          "id": 13,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2805921/c4446775-2fe2-4dc5-b9c3-16d8ab860c17/928x928-webp",
          "description": "Масло топлёное ГХИ",
          "weight": "140 г",
          "price": "230₽"
        }
      ]
    },
    {
      "category": "drinks",
      "items": [
        {
          "id": 14,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/2bba3542-52d7-4b95-8ec8-7bac303f1b87/464x464-webp",
          "description": "Вода негазированная Горная природная питьевая",
          "weight": "1,5 л",
          "price": "41₽"
        },
        {
          "id": 15,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/616795ca-9ea3-435a-b7f3-b55f0203029e/928x928-webp",
          "description": "Вода минеральная газированная природная питьевая",
          "weight": "1,5 л",
          "price": "41₽"
        },
        {
          "id": 16,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/8ab55f6e-0172-4696-8b1f-35d3b5ce0a6c/928x928-webp",
          "description": "Вода детская с рождения негазированная",
          "weight": "1,5 л",
          "price": "38₽"
        },
        {
          "id": 17,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/4ef1d7f2-3902-410a-b100-6858e7fddd38/928x928-webp",
          "description": "Вода негазированная Горная природная питьевая",
          "weight": "5 л",
          "price": "90₽"
        },
        {
          "id": 18,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/6a5822f6-1349-4dbc-a640-7a84cde731cd/928x928-webp",
          "description": "Вода минеральная лечебно-столовая Borjomi газированная",
          "weight": "750 мл",
          "price": "114₽"
        },
        {
          "id": 19,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/0579855b-67d5-4e03-8743-d7f768ea7a26/928x928-webp",
          "description": "Вода минеральная Donat Mg газированная",
          "weight": "1 л",
          "price": "134₽"
        }
      ]
    },
    {
      "category": "frozen",
      "items": [
        {
          "id": 20,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2756334/18c10bb1-bd3b-4fda-8ca8-665d50b35cc8/928x928-webp",
          "description": "Мороженое молочное Snickers с карамелью и арахисом в глазури эскимо",
          "weight": "65 г",
          "price": "104₽"
        },
        {
          "id": 21,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/9cfabe00-127c-449b-81d9-61fb9126d44f/928x928-webp",
          "description": "Мороженое молочное Bounty в глазури эскимо",
          "weight": "65 г",
          "price": "114₽"
        },
        {
          "id": 22,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2805921/e67e608b-dd76-4015-981e-fe3b3a923bd5/928x928-webp",
          "description": "Мороженое «Магнат» манго и красные ягоды эскимо",
          "weight": "74 г",
          "price": "129₽"
        },
        {
          "id": 23,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2805921/4c013f24-f29a-4d81-a630-f8a001e19107/928x928-webp",
          "description": "Мороженое Эkzo дрaгонфрут-гуанабана эскимо",
          "weight": "70 г",
          "price": "76₽"
        },
        {
          "id": 24,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2756334/3715afbb-3546-4971-9950-1df8c35a6764/464x464-webp",
          "description": "Мороженое ванильное Milka с молочным шоколадом в глазури эскимо",
          "weight": "62 г",
          "price": "121₽"
        }
      ]
    },
    {
      "category": "meatFish",
      "items": [
        {
          "id": 25,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/aa0bac94-59fc-4228-bf03-4c3b11e4862b/928x928-webp",
          "description": "Мякоть бедра цыплёнка-бройлера с овощами",
          "weight": "700 г",
          "price": "314₽"
        },
        {
          "id": 26,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/940a6cf8-84ce-45b3-9cb3-db598a6c402b/928x928-webp",
          "description": "Голень куриная «Ферма Евгения Рошаля» охлаждённая",
          "weight": "600 г",
          "price": "233₽"
        },
        {
          "id": 27,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2805921/fbd9102a-853c-4227-a185-9261042a8f90/928x928-webp",
          "description": "Печень цыплёнка-бройлера «Троекурово»",
          "weight": "500 г",
          "price": "130₽"
        },
        {
          "id": 28,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/80649eac-ab27-4b86-a36a-bee38956cc8f/928x928-webp",
          "description": "Стейкбургер с чёрным перцем «Из Лавки»",
          "weight": "360 г",
          "price": "251₽"
        }
      ]
    },
    {
      "category": "sweets",
      "items": [
        {
          "id": 29,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/943cfd2a-abfd-4b02-925d-d8768bc8b9c5/928x928-webp",
          "description": "Попкорн сладкий апельсин",
          "weight": "100 г",
          "price": "62₽"
        },
        {
          "id": 30,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/fb8f22fc-ce06-4ecb-a2c9-f18c6aedd28c/464x464-webp",
          "description": "Крекеры льняные хрустящие Флакс-кубики со вкусом аджики",
          "weight": "40 г",
          "price": "41₽"
        },
        {
          "id": 31,
          "image": "https://yastatic.net/avatars/get-grocery-goods/6247604/9a51faca-f95c-4c4c-851b-bf37e332d21e/928x928-webp",
          "description": "Сыр Чечил Домашний соломка 40%",
          "weight": "90 г",
          "price": "122₽"
        },
        {
          "id": 32,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/968933a5-9420-45d0-8a9a-8896c3a5c0ec/464x464-webp",
          "description": "Чипсы картофельные Lays рифлёные гребешки в сливочном соусе",
          "weight": "100 г",
          "price": "124₽"
        },
        {
          "id": 33,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/ac020070-dfa0-436c-8b33-322d777f811e/928x928-webp",
          "description": "Снеки кукурузные Cheetos сыр",
          "weight": "50 г",
          "price": "79₽"
        },
        {
          "id": 34,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/aee84490-ce1e-4ba8-8cca-b7e45e656317/928x928-webp",
          "description": "Снеки остро-пряные Yopokki",
          "weight": "50 г",
          "price": "235₽"
        }
      ]
    }
  ]);

  const getProductsByCategory = (category) => {
    const categoryData = products.value.find(p => p.category === category);
    return categoryData ? categoryData.items : [];
  };

  return { products, getProductsByCategory };
});