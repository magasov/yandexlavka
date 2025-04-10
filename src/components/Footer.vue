<style lang="scss" scoped>
    footer{
        background-color:rgba(129, 119, 99, .1);
        padding: 0 24px;        
        margin: 24px 0 0 0;
        a{
            text-decoration: none;
            color: #9e9b98;
        }
    }
    .logoApp{
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 32px 0;
    }
    .appF{
        display: flex;
        gap: 8px;
    }

    .footerM{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 32px 0;

        border-bottom: 1px solid hsla(30, 3%, 53%, .2);
        border-top: 1px solid hsla(30, 3%, 53%, .2);

        li{
            width: 375px;
            color: hsla(30, 3%, 53%, .2);
        }
        .m1{
            width: 370px;
            height: 75px;
        }
    }
    .footerD{
        color: #9e9b98;
        margin-top: 16px;
        width: 900px;
        font-size: 13px;
    }
    .footerDD{
        display: flex;
        color: #9e9b98;
        margin-top: 32px;
        align-items: center;
    }
    .fd{
        width: 100%;
        height: 32px;
    }
    .point{
        padding: 0 8px;
    }
</style>
<template>
    <footer>
        <div class="footerC">
            <div class="footerH">
                <div class="logoApp">
                        <div class="logoF">
                            <img src="../assets/icons/logo.svg" alt="#">
                        </div>
                        <div class="appF">
                            <img src="https://avatars.mds.yandex.net/get-bunker/128809/56d49f31c8e88a2822fe26c77b0ea965d22837e2/orig" alt="#">
                            <img src="https://avatars.mds.yandex.net/get-bunker/128809/1c5007322ebf05af9d9cdcf079e4f12f1f719da0/orig" alt="#">
                        </div>                    
                </div>
            </div>


            <div class="footerM">
                    <ul class="m1">
                        <li><a href="#">Что продаем</a></li>
                        <li><a href="#">Как работает</a></li>
                        <li><a href="#">Работа у партнёра Яндекс Лавки</a></li>
                    </ul>

                    <ul class="m2">
                        <li><a href="#">Арендодателям</a></li>
                        <li><a href="#">Поставщикам</a></li>
                        <li><a href="#">Лавка для бизнеса</a></li>
                    </ul>

                    <ul class="m3">
                        <li><a href="#">Партнёрам</a></li>
                        <li><a href="#">Вопросы и ответы</a></li>
                        <li><a href="#">Рецепты</a></li>
                    </ul>
                    <ul class="m4">
                        <li><a href="#">Правило возрата товаров</a></li>
                    </ul>
            </div>
            <div class="footerD">
                    <p>
                        Яндекс Лавка  раздел информационного сервиса Яндекс Еда, подробнее: clck.ru/QgJpy. Доставка осуществляется партнёрами сервиса Яндекс Еда. Зона, время доставки и предложения ограничены. Google Play и логотип Google Play являются товарными знаками корпорации Google LLC. <br> App Store является знаком обслуживания компании Apple Inc.
                    </p>
            </div>
            <div class="footerDD">
                    <span>
                        © 2025 ООО «Яндекс.Лавка»
                    </span>
                    <span class="point">
                        ·
                    </span>
                    <span>
                        Пользовательское соглашение    
                    </span>
                    <span class="point">
                        ·
                    </span>
                    <span>
                        Правила рекомендаций
                    </span>
                    <span class="point">
                        ·
                    </span>
                    <span>
                        Пресс-служба
                    </span>
                    <span class="point">
                        ·
                    </span>
                    <span>
                        Специальная оценка труда ООО «Яндекс.Лавка»
                    </span>
            </div>
            <div class="fd">

            </div>
        </div>
    </footer>
</template>

<script>
     export default {
        name: 'Footer'
    }
</script>
