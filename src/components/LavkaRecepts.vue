<template>
    <div class="lavkarecept">
            <h3>Рецепты Вай Лавки</h3>
            <div class="lavkarecept__card">
                <div class="recipes__right">
                    <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8 11l5.246-5.246a.5.5 0 000-.708l-.692-.692a.5.5 0 00-.708 0L4 12l7.646 7.646a.5.5 0 00.708 0l.692-.692a.5.5 0 000-.708L7.8 13h11.7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H7.8z" fill="currentColor"></path></svg>
                </div>
                <router-link :to="'/recipes/1'" class="lavkarecepts" > 
                    <div class="lavkarecepts__text">
                        <p>Персики-гриль с мороженым</p>
                        <span>15 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2805921/c87023dc-e76d-4259-acab-f0f4ff7e060c/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/2'"  class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Мак энд чиз</p>
                        <span>1 ч</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2805921/70f6369b-0702-4db1-96e4-957c3cae304b/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/3'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Салат с креветками и авокадо</p>
                        <span>30 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2791769/c0885154-80cc-4956-8959-6a8cba12d1e5/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/4'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Грибной крем-суп</p>
                        <span>30 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2888787/08041da3-5f68-47f8-9901-0ff21dfb0734/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/5'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Кускус с запечёнными овощами</p>
                        <span>25 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/e5338bef-84e4-4b67-ad6a-6d8019e303a4/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/5'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Кускус с запечёнными овощами</p>
                        <span>25 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/e5338bef-84e4-4b67-ad6a-6d8019e303a4/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/5'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Кускус с запечёнными овощами</p>
                        <span>25 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/e5338bef-84e4-4b67-ad6a-6d8019e303a4/392x588?webp=true"
                        alt="card">
                </router-link>
                <router-link :to="'/recipes/5'" class="lavkarecepts">
                    <div class="lavkarecepts__text">
                        <p>Кускус с запечёнными овощами</p>
                        <span>25 мин</span>
                    </div>
                    <img src="https://yastatic.net/avatars/get-grocery-goods/2998515/e5338bef-84e4-4b67-ad6a-6d8019e303a4/392x588?webp=true"
                        alt="card">
                </router-link>
                <div class="recipes__left">
                    <svg class="i1rjkic7" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.5a.5.5 0 01.5-.5h11.7l-5.246-5.246a.5.5 0 010-.708l.692-.692a.5.5 0 01.708 0L20 12l-7.646 7.646a.5.5 0 01-.708 0l-.692-.692a.5.5 0 010-.708L16.2 13H4.5a.5.5 0 01-.5-.5v-1z" fill="currentColor"></path></svg>
                </div>
            </div>
        </div>
  </template>
  
  <script>
export default {
    name: 'LavkaRecepts'
}
  </script>
  
  <style lang="scss" scoped>
     .lavkarecept {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3 {
            font-weight: 800;
            font-size: 25px;
        }

        &__card {
            width: 100%;
           display: grid;
           grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            position: relative;

            .lavkarecepts {
                flex: 1;
                height: 255px;
                position: relative;
                overflow: hidden;
                border-radius: 24px;
                transition: .3s ease;

                &:hover {
                transition: .3s ease;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                }

                

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                &__text {
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    width: 100%;
                    z-index: 2;
                    padding: 20px;
                    font-weight: 700;
                    color: #fff;

                    span {
                        color: rgb(209, 209, 209);
                    }
                }

                
            }

            .recipes__left {
                    position: absolute;
                    top: 46%;
                    right:  -35px;
                    cursor: pointer;
                    width: 44px;
                    height: 44px;
                    background: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 5px 30px rgba(100, 100, 100, 0.322);
                    z-index: 2;

                    svg {
                        width: 24px;
                    }
                }
            .recipes__right {
                    position: absolute;
                    top: 46%;
                    left:  -35px;
                    cursor: pointer;
                    width: 44px;
                    height: 44px;
                    background: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 5px 30px rgba(100, 100, 100, 0.322);
                    z-index: 2;

                    svg {
                        width: 24px;
                    }
                }

        }
    }
  </style>