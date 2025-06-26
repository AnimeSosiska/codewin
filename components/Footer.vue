<script setup>
    import phoneIconFooter from './assets/svg/phone-icon-footer.svg'
    import mailIconFooter from './assets/svg/mail-icon-footer.svg'
    import returnIconFooter from './assets/svg/return-icon-footer.svg'
    import logo from './assets/svg/logo.svg'
</script>

<template lang="pug">
    .footer
        .footer__content
            .content__list
                .list__column.first-column
                    logo(filled class="logo")
                    span.name.hidden ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»
                    .credentials.hidden
                        span.inn 2463123719
                        span.kpp 246301001
                        span.ogrn 1212400008688
                .list__column
                    span.column__title Компания
                    a(href="#").column__link О компании
                    a(href="#").column__link Проекты
                    a(href="#").column__link Каталог
                    a(href="#").column__link Контакты
                .list__column
                    span.column__title Каталог
                    a(href="#").column__link КНС
                    a(href="#").column__link Ёмкости
                    a(href="#").column__link Ливневые очистные-сооружения
                    a(href="#").column__link Хозяйственно-бытовые сооружения
                    a(href="#").column__link Комплектующие
                .list__column
                    span.column__title Контакты
                    a(href="tel:+73912095757" class="column__link") 
                        phoneIconFooter(filled class="icon")
                        span +7 (391) 209 57-57
                    a(href="tel:+73912155433" class="column__link") 
                        phoneIconFooter(filled class="icon")
                        span +7 (391) 215 54-33
                    a(href="mailto:los-bio@mail.ru" class="column__link underline") 
                        mailIconFooter(filled class="icon")
                        span los-bio@mail.ru
                    a(href="/" class="column__link underline")
                        returnIconFooter(filled class="icon")
                        span Заказать звонок
                    button.column__button Получить КП
</template>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        background: linear-gradient(185deg, #090b1a, #060b17);

        &__content {
            max-width: 1200px;
            padding: 89px 20px;
            margin: 0 auto;
            box-sizing: border-box;
            @media (max-width: 1200px) {
                max-width: 991px;
            }
            
            @media (max-width: 991px) {
                max-width: 768px;
                padding: 60px 20px;
            }
            
            @media (max-width: 768px) {
                padding: 40px 20px;
            }
            
            .content__list{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 30px;
                
                @media (max-width: 991px) {
                    gap: 40px;
                }
                
                @media (max-width: 768px) {
                    flex-direction: column;
                    gap: 30px;
                }

                .list__column{
                    display: flex;
                    flex-direction: column;
                    
                    &.first-column {
                        @media (max-width: 991px){
                            display: flex;
                            width: 100%;
                        }
                    }
                    .logo {
                        max-width: 100%;
                        width: 240px;
                        height: 60px;
                        margin-bottom: 0;
                        
                        @media (max-width: 991px) {
                            width: 200px;
                            height: 50px;
                        }
                    }
                    
                    .name{
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 141%;
                        margin: 30px 0 12px;
                        @media (max-width: 768px) {
                            margin: 20px 0 10px;
                        }
                    }
                    
                    .credentials {
                        display: flex;
                        flex-wrap: wrap;
                        max-width: 240px;
                        font-size: 14px;
                        @media (max-width: 768px) {
                            max-width: 100%;
                        }
                        
                        span {
                            margin: 0 10px 5px 0;
                        }
                        
                        .inn:before{
                            content: "ИНН: ";
                            color: #ffffff60;
                        }
                        .kpp:before{
                            content: "КПП: ";
                            color: #ffffff60;
                        }
                        .ogrn:before{
                            content: "ОГРН: ";
                            color: #ffffff60;
                        }
                    }
                    @media (max-width: 991px) {
                        .credentials.hidden, .name.hidden{
                            display: none;
                        }
                    }
                    
                    .column{
                        &__title{
                            text-transform: uppercase;
                            font-size: 18px;
                            font-weight: 600;
                            line-height: 141%;
                            margin-bottom: 10px;
                        }
                        
                        &__link{
                            font-size: 16px;
                            line-height: 141%;
                            color: #ffffff80;
                            margin-top: 20px;
                            max-width: 180px;
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            
                            @media (max-width: 768px) {
                                margin-top: 15px;
                            }
                            
                            span{
                                padding-left: 8px;
                            }
                        }
                        
                        &__button{
                            max-width: 100%;
                            font-size: 14px;
                            font-weight: 500;
                            background-color: var(--main-color);
                            border: none;
                            border-radius: 4px;
                            padding: 8px 0;
                            line-height: 141%;
                            margin-top: 25px;
                            cursor: pointer;
                            
                            @media (max-width: 768px) {
                                margin-top: 20px;
                                max-width: 200px;
                            }
                            transition: all 0.1s ease;
                            &:hover{
                                background-color: var(--main-color-hover);
                            }
                        }
                    }
                    
                    .underline {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>