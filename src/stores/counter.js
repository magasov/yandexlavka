import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      category: "bakery",
      items: [
        {
          id: 1,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/6087c5b8-4fa2-4a11-ab99-f1df9dda5260/928x928-webp",
          description: "Хлеб пшеничный «Из Лавки» с чесночным маслом и зеленью",
          weight: "240 г",
          price: "144",
        },
        {
          id: 2,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/8ddff13e-bc20-4978-867c-d54a0b5f2bd8/464x464-webp",
          description: "Хлеб белково-полбяной многозерновой «Из Лавки»",
          weight: "250 г",
          price: "125",
        },
        {
          id: 3,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/6bed5f92-f347-4352-bc53-c77a2866693f/928x928-webp",
          description: "Хлеб мультизерновой заварной",
          weight: "390 г",
          price: "125",
        },
        {
          id: 4,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/e426a8e9-ea0c-498b-814f-0e82d1248676/464x464-webp",
          description: "Хлеб пшеничный луковый",
          weight: "335 г",
          price: "122",
        },
        {
          id: 5,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/5a3027f7-ae7f-4960-b283-0344605f095f/928x928-webp",
          description: "Багет с чесночным маслом",
          weight: "160 г",
          price: "90",
        },
      ],
      recipes: [
        {   
          "id": 1,
          "video": "https://yastatic.net/s3/lavka-pigeon/video/5efe2189-8ddd-44d6-8d56-34f44c4217b8.mp4",
          "title": "Персики-гриль с мороженым",
          "description": "Фрукты на гриле? Почему бы и нет! Тёплые персики хорошо сочетаются с мороженым и взбитыми сливками.",
          "category": ["Десерты", "Фрукты и ягоды", "За 15 минут"],
          "totaltime": "15 мин",
          "activetime": "5 мин",
          "slozhnost": "1 / 5",
          "author": "Редакция Лавки",
          "authorDescription": "Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами",
          "ingredients": {
            "title": "Ингредиенты на 4 порции",
            "items": [
              "Персики — 2 шт.",
              "Оливковое масло — 1 ст. л.",
              "Мёд — 2 ч. л.",
              "Ванильное мороженое — 1 упаковка",
              "Корица — по вкусу"
            ],
            "additional": "Также понадобится сковорода-гриль"
          },
          "steps": [
            {
              "step": 1,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2805921/c1df4436-0cc4-4823-a99b-806ba4a0043b/918x612?webp=true",
              "description": "Разогреваем на сильном огне сковородку-гриль. Персики разрезаем на половинки, убираем косточки и смазываем маслом — удобнее всего делать это кисточкой.",
              "ingredients": ["Персики — 2 шт.", "Оливковое масло — 1 ст. л."]
            },
            {
              "step": 2,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/a9dde047-d7ce-4cca-9a76-035e8ef54783/918x612?webp=true",
              "description": "Выкладываем персики срезом вниз на сковородку и обжариваем 3–4 минуты на сильном огне, пока на персиках не появятся следы от гриля. Переворачиваем и обжариваем ещё пару минут, чтобы фрукты стали тёплыми со всех сторон."
            },
            {
              "step": 3,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/cf6f1151-8cf4-4100-9751-b221660e482e/918x612?webp=true",
              "description": "Перемещаем персики на тарелку срезами вверх, сбрызгиваем мёдом и выкладываем на каждую половинку шарик ванильного мороженого.",
              "ingredients": ["Мёд — 2 ч. л.", "Ванильное мороженое — 1 упаковка"]
            },
            {
              "step": 4,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/849a7db5-b82d-4420-8709-e1dbdcd08385/918x612?webp=true",
              "description": "Сверху блюдо можно посыпать корицей или украсить зеленью.",
              "ingredients": ["Корица — по вкусу"]
            }
          ]
        },
        {
          "id": 2,
          "video": "https://yastatic.net/s3/lavka-pigeon/video/546e04e4-10bf-448a-9ce2-efdde09f50df.mp4",
          "title": "Мак энд чиз",
          "description": "Классическое американское блюдо делает таким виральным разнообразие сыров. Начать можно с двух — твёрдого и более мягкой моцареллы. А когда войдёте во вкус, будете экспериментировать с самыми разными комбинациями.",
          "category": ["Американская кухня", "Паста и ризотто", "Без мяса"],
          "totaltime": "1 ч",
          "activetime": "40 мин",
          "slozhnost": "3 / 5",
          "author": "Редакция Лавки",
          "authorDescription": "Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами",
          "ingredients": {
            "title": "Ингредиенты на 4 порции",
            "items": [
              "Макароны — 300 г",
              "Молоко — 400 мл",
              "Твёрдый сыр — 200 г",
              "Моцарелла — 100 г",
              "Пшеничная мука — 45 г",
              "Сливочное масло — 45 г",
              "Соль — 1 щепотка"
            ],
            "additional": "Также понадобится духовка"
          },
          "steps": [
            {
              "step": 1,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2998515/7f137e18-eac0-46b2-a542-cc26ceacf9b3/918x612?webp=true",
              "description": "Сыры натираем на средней или мелкой тёрке.",
              "ingredients": ["Твёрдый сыр — 200 г", "Моцарелла — 100 г"]
            },
            {
              "step": 2,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2998515/1be653aa-8c92-4da1-8a17-8fa28d69ea04/918x612?webp=true",
              "description": "Ставим воду для макарон кипятиться на плиту. В это время готовим соус бешамель. Для этого в сотейнике растапливаем сливочное масло и обжариваем на нём муку до появления приятного орехового аромата. На это уйдёт пара минут. Во время обжаривания всё время помешиваем муку, чтобы она не пригорела.",
              "ingredients": ["Пшеничная мука — 45 г", "Сливочное масло — 45 г"]
            },
            {
              "step": 3,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2998515/65f917da-f077-4b30-83c3-5f5722480b31/918x612?webp=true",
              "description": "Макароны закидываем в кипящую воду и отвариваем до состояния альденте. Сливаем воду через дуршлаг. Макароны можно взять любые — перья, ракушки, рожки. Главное, чтобы они были внутри полыми.",
              "ingredients": ["Макароны — 300 г"]
            },
            {
              "step": 4,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2805921/34a16734-02fc-40e5-b72e-f607f289fbe1/918x612?webp=true",
              "description": "Молоко немного подогреваем и тонкой струйкой вливаем к муке и маслу. Всё время активно помешиваем.",
              "ingredients": ["Молоко — 400 мл"]
            },
            {
              "step": 5,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2783132/4a89bbde-883f-4bd8-8ef7-58f81aab39a6/918x612?webp=true",
              "description": "Далее варим соус до лёгкого загустения, постоянно перемешивая его, чтобы не получилось комочков."
            },
            {
              "step": 6,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2750890/96623411-7e3e-4a23-a421-dbb3e43d020a/918x612?webp=true",
              "description": "В горячую однородную бешамель кладём почти весь сыр — немного оставляем только для того, чтобы посыпать макароны сверху. Перемешиваем массу, чтобы сыры полностью расплавились. Снимаем соус с огня."
            },
            {
              "step": 7,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2750890/5521acde-83fc-4b62-8ee6-f9f3e902d1cf/918x612?webp=true",
              "description": "Смешиваем в одной миске макароны и сырный соус. После этого перекладываем массу в форму для запекания, предварительно смазав дно и стенки формы сливочным маслом."
            },
            {
              "step": 8,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2750890/bac0701f-009a-4750-98ef-e261e3e91c28/918x612?webp=true",
              "description": "По желанию сверху посыпаем блюдо тёртым сыром."
            },
            {
              "step": 9,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2805921/61f2a4c5-87a8-48c6-a7f9-1fd8e1ef5741/918x612?webp=true",
              "description": "Отправляем запекаться на 20–25 минут в разогретую до 180 ℃ духовку. Достаём, позволяем слегка остыть и подаём к столу прямо в форме."
            }
          ]
        },
        {
          "id": 3,
          "video": "https://yastatic.net/s3/lavka-pigeon/video/6283ffde-f177-4fd6-a558-4a8abdb8e339.mp4",
          "title": "Салат с креветками и авокадо",
          "description": "С одной стороны, салат с зеленью, с другой — полноценное горячее блюдо. Вместо креветок можно использовать куриную грудку или консервированного тунца — любой белковый продукт от компании зелени и авокадо только выигрывает.",
          "category": ["Салаты", "Рыба и морепродукты", "Вегетарианское", "За 30 минут"],
          "totaltime": "30 мин",
          "activetime": "30 мин",
          "slozhnost": "3 / 5",
          "author": "Редакция Лавки",
          "authorDescription": "Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами",
          "ingredients": {
            "title": "Ингредиенты на 4 порции",
            "items": [
              "Авокадо — 2 шт.",
              "Рукола — 200 г",
              "Помидоры — 4 шт.",
              "Креветки очищенные — 400 г",
              "Лимонный сок — 2 ст. л.",
              "Оливковое масло — 2 ст. л."
            ],
            "additional": ""
          },
          "steps": [
            {
              "step": 1,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2805921/70ca9fec-49e9-498b-88cc-764ea3811210/918x612?webp=true",
              "description": "Томаты режем дольками, авокадо — кубиками или небольшими ломтиками. В глубокой миске смешиваем салатные листья, авокадо и помидоры, добавляем лимонный сок и перемешиваем.",
              "ingredients": ["Авокадо — 2 шт.", "Рукола — 200 г", "Помидоры — 4 шт.", "Лимонный сок — 2 ст. л."]
            },
            {
              "step": 2,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2998515/249df505-bb58-450b-81c9-31543bb4cb8a/918x612?webp=true",
              "description": "Креветки можно отварить или обжарить на сковородке в небольшом количестве оливкового масла. Это займёт 10–15 минут. Затем добавляем к зелени тёплые креветки, ещё раз перемешиваем салат, приправляем солью и перцем. В качестве заправки подойдёт оливковое масло.",
              "ingredients": ["Креветки очищенные — 400 г", "Оливковое масло — 2 ст. л."]
            },
            {
              "step": 3,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2783132/350d11cc-746f-48ac-88aa-8d05c333b27b/918x612?webp=true",
              "description": "Подаём к столу, пока креветки ещё теплые."
            },
           
          ]
        },
        {
          "id": 4,
          "video": "https://yastatic.net/s3/lavka-pigeon/video/e6f49014-5f87-4432-9af2-bdc438227aa9.mp4",
          "title": "Грибной крем-суп",
          "description": "Базовый рецепт крем-супа, который можно готовить не только с грибами, но и с любыми овощами или только c картофелем. Если хочется чуть больше сливочности во вкусе, советуем заменить часть бульона сливками. Если необходимо вегетарианское блюдо, используйте вместо куриного бульона овощной или просто воду.",
          "category": ["Супы", "Овощи", "За 30 минут"],
          "totaltime": "30 мин",
          "activetime": "30 мин",
          "slozhnost": "1 / 5",
          "author": "Редакция Лавки",
          "authorDescription": "Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами",
          "ingredients": {
            "title": "Ингредиенты на 5 порций",
            "items": [
              "Куриный бульон — 1.5 л",
              "Шампиньоны — 300 г",
              "Картофель — 4 шт.",
              "Лук белый — 1 шт.",
              "Чеснок — 3 зуб.",
              "Оливковое масло — 3 ст. л.",
              "Соль — по вкусу",
              "Перец — по вкусу"
            ],
            "additional": "Также понадобится блендер"
          },
          "steps": [
            {
              "step": 1,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2888787/4545c167-e234-497b-872d-4b6ced5c4cc0/918x612?webp=true",
              "description": "Мелко нарезаем лук с чесноком. В кастрюле разогреваем масло и обжариваем на нём до прозрачности лук и чеснок.",
              "ingredients": ["Лук белый — 1 шт.", "Чеснок — 3 зуб.", "Оливковое масло — 3 ст. л."]
            },
            {
              "step": 2,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2756334/52aba894-d597-40a1-a943-82c3e0cf4afb/918x612?webp=true",
              "description": "Нарезаем картофель кубиками, а грибы — ломтиками. Добавляем в кастрюлю. Туда же добавляем бульон (или горячую воду), солим по вкусу и варим под крышкой в течение 15 минут.",
              "ingredients": ["Куриный бульон — 1.5 л", "Шампиньоны — 300 г", "Картофель — 4 шт."]
            },
            {
              "step": 3,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2783132/3b498129-28e2-4027-b158-884189f027f0/918x612?webp=true",
              "description": "Выливаем из кастрюли половину жидкости и блендером доводим оставшийся суп до однородности. Затем вливаем обратно остатки жидкости и повторно доводим до кипения. Вместо бульона на этом этапе в суп можно влить сливки."
            },
            {
              "step": 4,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2750890/71e0de92-f93c-4d78-91eb-92b183dbfdb8/918x612?webp=true",
              "description": "Подаём с зеленью и гренками."
            }
          ]
        },
        {
          "id": 5,
          "video": "https://yastatic.net/s3/lavka-pigeon/video/f622975b-d41b-4285-a413-e05270ff8838.mp4",
          "title": "Кускус с запечёнными овощами",
          "description": "Запечённые овощи — сами по себе отличный гарнир, а в сочетании с кускусом и вовсе превращаются в полноценное горячее блюдо. Прелесть рецепта — в его вариативности: вместо цукини и баклажанов можно взять морковь, свёклу и любые другие овощи.",
          "category": ["Гарниры и овощи", "Вегетарианское", "За 15 минут"],
          "totaltime": "25 мин",
          "activetime": "15 мин",
          "slozhnost": "2 / 5",
          "author": "Редакция Лавки",
          "authorDescription": "Собираем интересные рецепты со всего света, а затем проверяем вместе с поварами и пробуем сами",
          "ingredients": {
            "title": "Ингредиенты на 4 порции",
            "items": [
              "Кускус — 240 г",
              "Цукини — 2 шт.",
              "Баклажан — 1 шт.",
              "Красный лук — 2 шт.",
              "Томаты черри — 400 г",
              "Вода — 500 мл",
              "Лимон — 2 шт.",
              "Мята — 4 веточки",
              "Чеснок — 2 зуб.",
              "Оливковое масло — 5 ст. л.",
              "Папика — по вкусу",
              "Соль — по вкусу",
              "Перец — по вкусу"
            ],
            "additional": "Также понадобятся духовка, форма для запекания"
          },
          "steps": [
            {
              "step": 1,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/ac577039-e6ca-4668-8260-08ddc17f2f67/918x612?webp=true",
              "description": "Разогреваем духовку до 220 °C. В это время нарезаем баклажан и цукини кубиками. Выжимаем сок одного лимона и натираем немного цедры. Лук нарезаем половинками или соломкой. Перекладываем все нарезанные овощи и томаты черри в форму для запекания, добавляем масло и специи по вкусу. Отправляем в духовку на 15–20 минут.",
              "ingredients": ["Цукини — 2 шт.", "Баклажан — 1 шт.", "Красный лук — 2 шт.", "Томаты черри — 400 г", "Лимон — 1 шт.", "Оливковое масло — 4 ст. л."]
            },
            {
              "step": 2,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2750890/ab03153d-95a8-4797-bfb8-5f9bac8f1e3f/918x612?webp=true",
              "description": "Кускус заливаем кипятком — долго варить его не нужно. Добавляем специи и немного оливкового масла.",
              "ingredients": ["Кускус — 240 г", "Вода — 500 мл", "Оливковое масло — 1 ст. л.", "Паприка — по вкусу"]
            },
            {
              "step": 3,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2783132/01f08697-b9a1-4bdf-8d5b-5dec9b920bee/918x612?webp=true",
              "description": "Мелко рубим мяту и кладём её в ёмкость. Туда же добавляем лимонную цедру и вторую половину лимонного сока. Мелко рубим зубчик чеснока и добавляем туда же.",
              "ingredients": ["Лимон — 1 шт.", "Мята — 4 веточки", "Чеснок — 2 зуб."]
            },
            {
              "step": 4,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/83c52b18-34b5-4588-98e8-28b5ca21ebf1/918x612?webp=true",
              "description": "Теперь достаём из духовки овощи, смешиваем с кускусом, добавляем гремолату из лимона и мяты. По желанию добавляем ещё немного лимонного сока и приправляем по вкусу."
            },
            {
              "step": 5,
              "img": "https://yastatic.net/avatars/get-grocery-goods/2791769/93f5066d-3c85-4d29-bdf8-ffbbadaea20d/918x612?webp=true",
              "description": "Подаём с салатом или просто так."
            }
          ]
        }
      ],
    },
    {
      category: "dairy",
      items: [
        {
          id: 6,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/50efe612-93ca-4f5b-972d-9f6175216741/928x928-webp",
          description: "Сгущёнка кокосовая протеиновая «Лавка 100»",
          weight: "200 г",
          price: "250",
        },
        {
          id: 7,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/cb08e69f-624e-4212-af31-ff6a42f68a93/928x928-webp",
          description: "Молоко 2,5% «Из Лавки»",
          weight: "900 мл",
          price: "62",
        },
        {
          id: 8,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/430633f6-55e7-4279-992d-4f9636a23465/928x928-webp",
          description: "Молоко 3,2% «Из Лавки»",
          weight: "900 г",
          price: "66",
        },
        {
          id: 9,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/1c6469cb-36d7-4b3f-9c69-69644be60678/928x928-webp",
          description: "Яйцо куриное СО",
          weight: "10 шт",
          price: "110",
        },
        {
          id: 10,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/63136d4d-e859-4154-9c86-1b0492b1d157/928x928-webp",
          description: "Масло сладко-сливочное несолёное 82,5%",
          weight: "180 г",
          price: "175",
        },
        {
          id: 11,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/7221c081-ef27-4897-8d52-cd51bc393055/928x928-webp",
          description: "Молоко сгущённое цельное с сахаром",
          weight: "270 г",
          price: "100",
        },
        {
          id: 12,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/9112c88f-ab00-4f99-becb-dc06b037c77c/928x928-webp",
          description: "Напиток сывороточный с соком апельсин-лимон-грейпфрут",
          weight: "300 мл",
          price: "45",
        },
        {
          id: 13,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2805921/c4446775-2fe2-4dc5-b9c3-16d8ab860c17/928x928-webp",
          description: "Масло топлёное ГХИ",
          weight: "140 г",
          price: "230",
        },
      ],
    },
    {
      category: "drinks",
      items: [
        {
          id: 14,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/2bba3542-52d7-4b95-8ec8-7bac303f1b87/464x464-webp",
          description: "Вода негазированная Горная природная питьевая",
          weight: "1,5 л",
          price: "41",
        },
        {
          id: 15,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/616795ca-9ea3-435a-b7f3-b55f0203029e/928x928-webp",
          description: "Вода минеральная газированная природная питьевая",
          weight: "1,5 л",
          price: "41",
        },
        {
          id: 16,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/8ab55f6e-0172-4696-8b1f-35d3b5ce0a6c/928x928-webp",
          description: "Вода детская с рождения негазированная",
          weight: "1,5 л",
          price: "38",
        },
        {
          id: 17,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/4ef1d7f2-3902-410a-b100-6858e7fddd38/928x928-webp",
          description: "Вода негазированная Горная природная питьевая",
          weight: "5 л",
          price: "90",
        },
        {
          id: 18,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/6a5822f6-1349-4dbc-a640-7a84cde731cd/928x928-webp",
          description: "Вода минеральная лечебно-столовая Borjomi газированная",
          weight: "750 мл",
          price: "114",
        },
        {
          id: 19,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/0579855b-67d5-4e03-8743-d7f768ea7a26/928x928-webp",
          description: "Вода минеральная Donat Mg газированная",
          weight: "1 л",
          price: "134",
        },
      ],
    },
    {
      category: "frozen",
      items: [
        {
          id: 20,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2756334/18c10bb1-bd3b-4fda-8ca8-665d50b35cc8/928x928-webp",
          description:
            "Мороженое молочное Snickers с карамелью и арахисом в глазури эскимо",
          weight: "65 г",
          price: "104",
        },
        {
          id: 21,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/9cfabe00-127c-449b-81d9-61fb9126d44f/928x928-webp",
          description: "Мороженое молочное Bounty в глазури эскимо",
          weight: "65 г",
          price: "114",
        },
        {
          id: 22,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2805921/e67e608b-dd76-4015-981e-fe3b3a923bd5/928x928-webp",
          description: "Мороженое «Магнат» манго и красные ягоды эскимо",
          weight: "74 г",
          price: "129",
        },
        {
          id: 23,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2805921/4c013f24-f29a-4d81-a630-f8a001e19107/928x928-webp",
          description: "Мороженое Эkzo дрaгонфрут-гуанабана эскимо",
          weight: "70 г",
          price: "76",
        },
        {
          id: 24,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2756334/3715afbb-3546-4971-9950-1df8c35a6764/464x464-webp",
          description:
            "Мороженое ванильное Milka с молочным шоколадом в глазури эскимо",
          weight: "62 г",
          price: "121",
        },
      ],
    },
    {
      category: "meatFish",
      items: [
        {
          id: 25,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2888787/aa0bac94-59fc-4228-bf03-4c3b11e4862b/928x928-webp",
          description: "Мякоть бедра цыплёнка-бройлера с овощами",
          weight: "700 г",
          price: "314",
        },
        {
          id: 26,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2998515/940a6cf8-84ce-45b3-9cb3-db598a6c402b/928x928-webp",
          description: "Голень куриная «Ферма Евгения Рошаля» охлаждённая",
          weight: "600 г",
          price: "233",
        },
        {
          id: 27,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2805921/fbd9102a-853c-4227-a185-9261042a8f90/928x928-webp",
          description: "Печень цыплёнка-бройлера «Троекурово»",
          weight: "500 г",
          price: "130",
        },
        {
          id: 28,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/80649eac-ab27-4b86-a36a-bee38956cc8f/928x928-webp",
          description: "Стейкбургер с чёрным перцем «Из Лавки»",
          weight: "360 г",
          price: "251",
        },
      ],
    },
    {
      category: "sweets",
      items: [
        {
          id: 29,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/943cfd2a-abfd-4b02-925d-d8768bc8b9c5/928x928-webp",
          description: "Попкорн сладкий апельсин",
          weight: "100 г",
          price: "62",
        },
        {
          id: 30,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2888787/fb8f22fc-ce06-4ecb-a2c9-f18c6aedd28c/464x464-webp",
          description:
            "Крекеры льняные хрустящие Флакс-кубики со вкусом аджики",
          weight: "40 г",
          price: "41",
        },
        {
          id: 31,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/6247604/9a51faca-f95c-4c4c-851b-bf37e332d21e/928x928-webp",
          description: "Сыр Чечил Домашний соломка 40%",
          weight: "90 г",
          price: "122",
        },
        {
          id: 32,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2888787/968933a5-9420-45d0-8a9a-8896c3a5c0ec/464x464-webp",
          description:
            "Чипсы картофельные Lays рифлёные гребешки в сливочном соусе",
          weight: "100 г",
          price: "124",
        },
        {
          id: 33,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/ac020070-dfa0-436c-8b33-322d777f811e/928x928-webp",
          description: "Снеки кукурузные Cheetos сыр",
          weight: "50 г",
          price: "79",
        },
        {
          id: 34,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2888787/aee84490-ce1e-4ba8-8cca-b7e45e656317/928x928-webp",
          description: "Снеки остро-пряные Yopokki",
          weight: "50 г",
          price: "235",
        },
      ],
    },
    {
      category: "vegetables",
      items: [
        {
          id: 35,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/b1d82b7b-ca09-41fd-9bf5-00b8a176572e/464x464-webp",
          price: "174",
          description: "Мандари­ны Сатцу­ма Из Лавки",
          weight: "600 г",
        },
        {
          id: 36,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/a0f8c627-1b06-4bf4-9478-d2d10291a1df/928x928-webp",
          price: "195 ",
          description: "Мандарины Марроко",
          weight: "1 кг",
        },
        {
          id: 37,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2783132/2e107bc0-fea7-4733-bce4-3645bc5396fa/928x928-webp",
          price: "125 ",
          description: "Мандарины с листочком",
          weight: "500 г",
        },
        {
          id: 38,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2888787/4d197700-6e23-4d92-b36e-a800ef145c86/928x928-webp",
          price: "174 ",
          description: "Мандарины Турция",
          weight: "1 кг",
        },
        {
          id: 39,
          image:
            "https://yastatic.net/avatars/get-grocery-goods/2750890/96a0a695-04c3-43b6-91ac-11d116eb8390/464x464-webp",
          price: "181 ",
          description: "Апельсины сладкие",
          weight: "500 г",
        },
      ],
    },
    {
      "category": "lovelavka",
      "items": [
        {
          "id": 40,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/81c2d868-f2cc-4564-9ba8-2eaae09f77b6/600x600?webp=true",
          "description": "Медовички Из Лавки",
          "weight": "120 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 41,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/a4fda71c-5587-4295-a776-d8a085552352/600x600?webp=true",
          "description": "Торт МонтБлант Из Лавки",
          "weight": "400 г",
          "price": "419",
          "oldPrice": "599"
        },
        {
          "id": 42,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/5e248cdb-67be-4a2e-981a-6ccbc30aee2a/600x600?webp=true",
          "description": "Чизкейк Нью-Йорк Из Лавки",
          "weight": "70 г",
          "price": "97",
          "oldPrice": "139"
        },
        {
          "id": 43,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/8e2d0e6a-5cfd-44fa-8906-7556e38f3db6/600x600?webp=true",
          "description": "Трайфл морковный Из Лавки творожный сыр",
          "weight": "168 г",
          "price": "171",
          "oldPrice": "245"
        },
        {
          "id": 44,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/0b04623e-ab78-42e7-b658-9299256dadaf/600x600?webp=true",
          "description": "Вупи пай Из Лавки банан в карамели",
          "weight": "90 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 45,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/84778605-185e-4851-8378-d40d3b9191a3/600x600?webp=true",
          "description": "Вупи пай Из Лавки ваниль и лесная ягода",
          "weight": "90 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 46,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/e1c73ff8-7033-4032-934b-002aee57ec5d/600x600?webp=true",
          "description": "Вупи пай Из Лавки пряная вишня",
          "weight": "90 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 47,
          "image": "https://yastatic.net/avatars/get-grocery-goods/5416507/99f2205a-b1f8-4600-b233-4faba1b846d7/600x600?webp=true",
          "description": "Пирожное кейк-попс Из Лавки лесные ягоды",
          "weight": "60 г",
          "price": "90",
          "oldPrice": "129"
        },
        {
          "id": 48,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2998515/4d687c60-5d1a-414a-954c-1066474b32c9/600x600?webp=true",
          "description": "Пирожное кейк-попс Из Лавки ореховое",
          "weight": "60 г",
          "price": "90",
          "oldPrice": "129"
        },
        {
          "id": 49,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2756334/e2baef03-3457-4be9-b537-974cb9956e86/600x600?webp=true",
          "description": "Торт медово-сметанный Из Лавки со сгущёнкой",
          "weight": "400 г",
          "price": "377",
          "oldPrice": "539"
        },
        {
          "id": 50,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/faf05fc7-141c-485e-92d9-7047a05b1303/600x600?webp=true",
          "description": "Торт Графские развалины Из Лавки",
          "weight": "100 г",
          "price": "139",
          "oldPrice": "199"
        },
        {
          "id": 51,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/4f07ccce-18cf-43f3-a55a-22d3d14d2a65/600x600?webp=true",
          "description": "Торт шоколадно-ореховый Из Лавки",
          "weight": "105 г",
          "price": "139",
          "oldPrice": "199"
        },
        {
          "id": 52,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/34cdde7b-9b85-4a84-91a4-d819141230a7/600x600?webp=true",
          "description": "Торт Медовый Из Лавки",
          "weight": "120 г",
          "price": "118",
          "oldPrice": "169"
        },
        {
          "id": 53,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/08f66941-c530-475e-867e-222b977313e6/600x600?webp=true",
          "description": "Торт Красный бархат Из Лавки",
          "weight": "120 г",
          "price": "118",
          "oldPrice": "169"
        },
        {
          "id": 54,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/7b9ca4c9-da21-44f5-8d8b-1d7fb588ee30/600x600?webp=true",
          "description": "Чизкейк Нью Йорк Из Лавки классический",
          "weight": "130 г",
          "price": "139",
          "oldPrice": "199"
        },
        {
          "id": 55,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/bbfaa1f0-9b2f-4eea-a5e8-4041db2645ac/600x600?webp=true",
          "description": "Чизкейк фисташковый Из Лавки",
          "weight": "130 г",
          "price": "146",
          "oldPrice": "209"
        },
        {
          "id": 56,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/adce5803-6cea-4e5a-b4fb-19362663c296/600x600?webp=true",
          "description": "Чизкейк Орео Из Лавки",
          "weight": "150 г",
          "price": "146",
          "oldPrice": "209"
        },
        {
          "id": 57,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/2b81c32d-59e4-461a-9cfa-8a7d87c1dfdd/600x600?webp=true",
          "description": "Наполеон Из Лавки со сгущёнкой",
          "weight": "125 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 58,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/e8044a78-81d6-4b93-a114-50973702357e/600x600?webp=true",
          "description": "Пирожное арахисовое Из Лавки",
          "weight": "125 г",
          "price": "202",
          "oldPrice": "289"
        },
        {
          "id": 59,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2805921/8c2c2c13-a661-4488-8506-7da6e0f77491/600x600?webp=true",
          "description": "Пирожное Панчо с бананом Из Лавки",
          "weight": "125 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 60,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/4298345f-f4cb-41a1-afc7-6fb5d24dd091/600x600?webp=true",
          "description": "Пирожные Из Лавки Шмель и Божья коровка",
          "weight": "76 г",
          "price": "160",
          "oldPrice": "229"
        },
        {
          "id": 61,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2783132/ceee3d70-9dbb-421a-9c50-031a193c12cc/600x600?webp=true",
          "description": "Картошка классическая Из Лавки",
          "weight": "100 г",
          "price": "115",
          "oldPrice": "165"
        },
        {
          "id": 62,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2888787/d69c5353-4dd0-4b17-8e00-41b9b6654e7b/600x600?webp=true",
          "description": "Пирожное Картошка Из Лавки карамель",
          "weight": "300 г",
          "price": "342",
          "oldPrice": "489"
        },
        {
          "id": 63,
          "image": "https://yastatic.net/avatars/get-grocery-goods/2750890/048879ca-17b9-4702-92de-2ef7bee8dda6/600x600?webp=true",
          "description": "Пирожное Картошка Из Лавки матча",
          "weight": "110 г",
          "price": "157",
          "oldPrice": "225"
        }
      ]
    }
  ]);

  const getProductsByCategory = (category) => {
    const categoryData = products.value.find((p) => p.category === category);
    return categoryData ? categoryData.items : [];
  };

  return { products, getProductsByCategory };
});
