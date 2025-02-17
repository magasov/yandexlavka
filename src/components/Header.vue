<template>
    <header>
        <a href="/"><img src="../assets/icons/logo.svg" alt="logo"></a>
        <div class="catalog">
            <span>
                <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v1zm0 5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v1zm.5 5.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-15z" fill="currentColor"></path></svg>
            </span>
            Каталог
        </div>
        <div class="input">
            <span>
                <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#21201F" fill-rule="evenodd" clip-rule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7zm18 11a1 1 0 000-1.414l-3.975-3.975A8.948 8.948 0 0020 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 005.611-1.975L20.586 22A1 1 0 0022 22z"></path></svg>
            </span>
            <input type="text" placeholder="Найти в Вай-Лавке">
        </div>
        <div class="catalog btnadress">
            <span>
                <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5286 6.62528C18.7014 6.21275 18.2871 5.79823 17.8745 5.97084L3.30704 12.0649C3.12106 12.1427 3 12.3246 3 12.5262V12.7219C3 12.9284 3.12687 13.1136 3.31937 13.1882L9.08 15.42L11.3032 21.18C11.3776 21.3728 11.563 21.5 11.7696 21.5H11.9651C12.1666 21.5 12.3484 21.379 12.4263 21.1932L18.5286 6.62528Z" fill="currentColor"></path></svg>
            </span>
            Укажите адрес доставки</div>
        <div class="catalog btnsort">
            <span>
                <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="6" width="11" height="2" rx="0.5" fill="currentColor"></rect><rect x="2" y="6" width="3" height="2" rx="0.5" fill="currentColor"></rect><rect x="3" y="16" width="10" height="2" rx="0.5" fill="currentColor"></rect><rect x="19" y="16" width="3" height="2" rx="0.5" fill="currentColor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7ZM8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17ZM16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13Z" fill="currentColor"></path></svg>
            </span>
        </div>
        <div class="catalog auth">Войти</div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
header {
    display: flex;
    padding: 0 20px;
    height: 79px;
    border-bottom: 1px solid rgb(241, 241, 241);
    align-items: center;
    gap: 20px;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 2;

    .input {
        flex: 1;
        border-radius: 16px;
        background: #EFEEED;
        height: 48px;
        display: flex;
        align-items: center;

        span {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            svg {
                width: 24px;
            }
        }

        input {
            width: 100%;
            height: 100%;
            border: 0;
            background: transparent;
            font-size: 15px;
            
            &::placeholder {
                color: rgb(148, 148, 148);
            }

            &:focus {
                outline: none;
            }
        }
    }

    .catalog {
        height: 48px;
        padding: 0 20px;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        span {
            width: 24px;
            display: flex;
            align-items: center;
        }
    }

    .btnadress {
        border: 0;
        background: #FCE000;


        &:hover {
            background: #F1D702;
        }
    }

    .btnsort {
        border: 0;
        transition: all .2s ease;
        padding: 0 13px;

        &:hover {
            background: #F4F4F4;
        }
    }

    .auth {
        border: 0;
        background: #F4F4F4;
        transition: all .2s ease;

        &:hover {
            background: #e7e7e7;
        }
    }
}
</style>