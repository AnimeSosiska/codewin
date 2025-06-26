<script setup>
    import locationIcon from './assets/svg/location-icon.svg'
    import phoneIcon from './assets/svg/phone-icon.svg'
    import mailIcon from './assets/svg/mail-icon.svg'
    import returnIcon from './assets/svg/return-icon.svg'
    import logo from './assets/svg/logo.svg'
</script>
<template lang="pug">
    .header 
            .topbar
                .topbar__list
                    span.hidden-on-mobile
                        locationIcon(filled class="icon")
                        span г. Красноярск
                        span.hidden , ул. Телевизорная 1, стр. 14, оф. 204
                    a(href="tel:+73912095757") 
                        phoneIcon(filled class="icon")
                        span +7 (391) 209 57-57
                    a(href="tel:+73912155433" class="hidden") 
                        phoneIcon(filled class="icon")
                        span +7 (391) 215 54-33
                    a(href="mailto:los-bio@mail.ru" class="hidden") 
                        mailIcon(filled class="icon")
                        span los-bio@mail.ru
                    a(href="/")
                        returnIcon(filled class="icon")
                        span Заказать звонок
            .bottombar
                .bottombar__list
                    logo(filled class="logo")
                    .navbar.hidden
                        a(href="/") О компании
                        a(href="/") Проекты
                        a(href="/") Каталог
                        a(href="/") Контакты
                    button Получить КП
</template>
<style lang="scss" scoped>
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .topbar{
            width: 100%;
            font-size: 13px;
            border-bottom: 1px solid #ffffff30;
            &__list{
                width: 100%;
                margin: 0 auto;
                padding: 0 20px;
                opacity: 50%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                height: 42px;
                max-width: 1200px;
                @media (max-width: 1200px) {
                    max-width: 991px;
                }
                @media (max-width: 991px) {
                    max-width: 768px;
                    span.hidden {
                        display: none;
                    }
                }
                @media (max-width: 768px){
                    .hidden {
                        display: none;
                    }
                }
                @media (max-width: 375px){
                    .hidden-on-mobile {
                        display: none;
                    }
                }
                a {
                    text-decoration: none;
                }
            }
        }
        .bottombar {
            width: 100%;
            &__list {
                margin: 17px auto;
                padding: 0 20px;
                max-width: 1200px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                @media (max-width: 1200px) {
                    max-width: 991px;
                }
                @media (max-width: 991px) {
                    max-width: 768px;
                }
                @media (max-width: 768px){
                    .navbar.hidden{
                        display: none;
                    }
                }
                button{
                    max-width: 100%;
                    padding: 10px 20px;
                    flex-shrink: 0;
                    background-color: var(--main-color);
                    border: none;
                    border-radius: 4px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.1s ease;
                    &:hover{
                        background-color: var(--main-color-hover);
                    }
                }
                .navbar {
                    display: flex;
                    flex-direction: row;
                    gap: 56px;
                    @media (max-width: 991px){
                        gap: 15px;
                    }
                    a{
                        text-decoration: none;
                    }
                }
                .logo {
                    max-width: 100%;
                    width: 240px;
                    height: 60px;
                    margin-bottom: 0;
                    @media (max-width: 991px) {
                        width: 150px;
                    }
                }
            }
        }
        .icon {
            font-size: 24px;
            margin-right: 3px;
        }
    }
</style>