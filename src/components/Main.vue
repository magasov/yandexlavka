<template>
    <div class="main">
        <div class="main__one">
            <div class="main__one_block">
                <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/1819942da2094fd69c996b3e943158f4/1168x576-webp" alt="banner">
                <h2>Скидки и кешбэк</h2>
            </div>
            <div class="main__one_block4">
                <div class="main__one_blockmin"><p>Свежие букеты</p>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2750890/6f35fbb9578f4acd942f3954cc9a548c/280x280-webp" alt="image">
                </div>
                <div class="main__one_blockmin"><p>Подарки к праздникам</p>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/f87b3db7-b598-4234-8e6c-c0a7307e36a6/280x280-webp" alt="image">
                </div>
                <div class="main__one_blockmin"><p>Что на обед?</p>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2791769/d2eb7ed7b7694545a9fc57d00d62bd5f/280x280-webp" alt="image">
                </div>
                <div class="main__one_blockmin"><p>Вы это заказывали</p>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2888787/46e14aba097b45e0a88e8888b98dfac6/280x280-webp" alt="image">
                </div>
            </div>
        </div>

        <div class="delivery">
            <div class="left">
                <span><img class="i1shnzmq" src="https://yastatic.net/avatars/get-bunker/61205/482532a3d13d2f5082c9dfe70377d9e27bcfb65f/orig" width="100%" height="100%" alt="" role="presentation" fetchpriority="auto" loading="eager" style="width: 100%; height: 100%; object-fit: contain;"></span>
                Бесплатная доставка и скидка 30% на первый заказ</div>
            <div class="right"><svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8L14.5 12.5L10 17" stroke="#111" stroke-width="1.5" stroke-linecap="round"></path></svg></div>
        </div>
    </div>
</template>

<script>
export default {
        name: 'Main'
    }
</script>

<style lang="scss" scoped>
.main {
    flex: 6;
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 0;

    &__one {
        display: flex;
        height: 288px;
        gap: 10px;
        margin-top: 20px;

        .main__one_block {
            flex: 2;
            height: 100%;
            overflow: hidden;
            border-radius: 28px;
            position: relative;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            h2 {
                position: absolute;
                z-index: 1;
                padding: 20px;
                color: #fff;
                font-size: 35px;
                font-weight: 900;
            }
        }

        .main__one_block4 {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 100%;
            gap: 10px;

            .main__one_blockmin {
            border-radius: 28px;
            position: relative;
            cursor: pointer;
            overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;

                }

                p {
                    position: absolute;
                    z-index: 1;
                    color: #fff;
                    padding: 15px;
                    font-weight: 600;
                }
            }
        }
    }

    .delivery {
        width: 100%;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        background: #f1f1f0a9;
        border-radius: 16px;

        .left {
            display: flex;
            align-items: center;
            gap: 20px;
            height: 100%;

            span {
                height: 100%;
            }
        }

        .right {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;

            svg {
                width: 24px;
                height: 24px;
            }
        }
    }
}
</style>