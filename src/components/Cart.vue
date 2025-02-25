<template>
    <div class="cart">
        <div class="cart__main">
            <h3>Корзина</h3>

            <div class="cart__none">
                <img src="https://yastatic.net/s3/lavka-web/public/assets/images/emptyCart@2x.png" width="100" alt="" loading="eager">
                <h3>В вашей корзине пока пусто</h3>
                <p>Тут появятся товары, которые вы закажете.</p>
            </div>

            <div class="count">
                <p>Закажите что-нибудь</p>
                <span>0</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart'
}
</script>

<style lang="scss" scoped>
.cart {
    flex: 2;
    height: max-content;
    position: sticky;
    height: calc(100vh - 80px);
    top: 80px;

    &__main {
        height: calc(100% - 40px);
        display: flex;
        padding: 20px 0;
        flex-direction: column;
        justify-content: space-between;

        h3 {
            font-weight: 900;
        }

        .cart__none {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            h3 {
                margin: 20px 0 0 0;
                font-weight: 900;
                max-width: 170px;
            }

            p {
                margin: 10px 0 0 0;
                color: rgb(49, 49, 49);
            }
        }

        .count {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: #F7F7F6;
            border-radius: 20px;
            color: #757575;

            span {
                font-size: 20px;
            }
        }
    }
}
</style>