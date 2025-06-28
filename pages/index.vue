<script setup>
    import { Pagination as CarouselPagination } from 'vue3-carousel'
    const sliderData  = await useFetch("https://api.los-bio.ru/info/group/slide")
    const advantagesData = await useFetch("https://api.los-bio.ru/info/group/advantage")
    const projectsData = await useFetch("https://api.los-bio.ru/projects/")
    const slider = computed(() => {
        return sliderData.data.value?.map(el => JSON.parse(el.value)) || []
    })
    const advantages = computed(() => {
        return advantagesData.data.value?.map(el => JSON.parse(el.value)) || []
    })
    const projects = projectsData.data.value
    useState("projects", () => projects)
</script>

<template lang="pug">
    .slider
        Carousel(ref="carousel")
            Slide(v-for="slide in slider" :key="slide.name")
                .slide__content
                    .content__left-side
                        h2.left-side__title {{slide.title}}
                        p.left-side__description {{slide.description}}
                        button.left-side__button {{slide.btnText}}
                    .content__right-side
                        img(
                            :src="`https://api.los-bio.ru/files/${slide.image[0].catalog}/${slide.image[0].name}`"
                            )   
            template(#addons)
                CarouselPagination
    .our-advantages
        .our-advantages__content
            h2.content__title Наши преимущества
            .content__list
                .content__block(v-for="advantage in advantages" :key="advantage.name")
                    .content__block-top
                        img(
                            :src="advantage.icon"
                        )
                        h3.block-top__title {{advantage.title}}
                    p.block__description {{advantage.description}}
    .projects
        .projects__content
            h2.content__title Проекты
            .content__list
                NuxtLink.content__block(v-for="project in projects" :key="project.title" :to="`/projects/${project.slug}`")
                    img(
                        :src="`https://api.los-bio.ru/files/${project.photos[0].catalog}/${project.photos[0].name}`"
                    )
                    h3.block__title {{project.title}}
                    .block__bottom-list
                        span.block__description {{project.short_description.blocks[0].data.text}}
                        span.block__line
                        span.block__works {{project.works}}
                        span.block__line
                        span.block__customer {{project.customer}}          
</template>

<style lang="scss" scoped>
    .slider{

        margin-bottom: 80px;
        
        @media (max-width: 991px) {
            margin-bottom: 60px;
        }
        
        @media (max-width: 768px) {
            margin-bottom: 40px;
        }
    }
    
    .carousel__slide{
        display: flex;
        flex-direction: row;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    
    .slide__content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 60px;
        padding: 0 20px 50px;
        box-sizing: border-box;
        @media (max-width: 1200px) {
            max-width: 991px;
        }
        
        @media (max-width: 991px) {
            max-width: 768px;
            gap: 40px;
        }
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 30px;
            padding-bottom: 30px;
        }
        
        .content__left-side{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            width: 50%;
            
            @media (max-width: 768px) {
                width: 100%;
                gap: 20px;
            }
        }
        
        .content__right-side{
            width: 50%;
            
            @media (max-width: 768px) {
                width: 120px;
                order: -1;
                margin: 0 auto;
            }
            
            img {
                max-height: 482px;
                width: 100%;
                height: auto;
                object-fit: contain;
                
                @media (max-width: 768px) {
                    max-height: 350px;
                }
            }
        }
    }
    
    .left-side{
        &__title{
            font-weight: bold;
            font-size: 48px;
            line-height: 1.2;
            
            @media (max-width: 991px) {
                font-size: 36px;
            }
            
            @media (max-width: 768px) {
                font-size: 32px;
                text-align: center;
            }
        }
        
        &__description{
            font-size: 18px;
            line-height: 150%;
            
            @media (max-width: 991px) {
                font-size: 16px;
            }
            @media (max-width: 768px) {
                text-align: center;
            }
        }
        
        &__button{
            min-width: 200px;
            font-size: 16px;
            font-weight: 600;
            background-color: var(--main-color);
            border: none;
            border-radius: 12px;
            padding: 14px 25px;
            margin-top: auto;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.1s ease;
            @media (min-width: 768px){
                width: 100%;
            }
            
            @media (max-width: 768px) {
                padding: 12px 20px;
                font-size: 15px;
            }
            &:hover{
                background-color: var(--main-color-hover);
            }
        }
    }
    
    .carousel__pagination{
        align-items: center;
        
        &-button--active{
            background-color: #ffffff05;
            width: 34px;
            height: 34px;
            
            @media (max-width: 768px) {
                width: 28px;
                height: 28px;
            }
            
            &:before{
                content: "";
                display: block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin: 0 auto;
                background-color: var(--main-color);
            }
        }
    }
    
    .our-advantages{
        width: 100%;
        margin-bottom: 80px;
        box-sizing: border-box;
        
        @media (max-width: 991px) {
            margin-bottom: 60px;
        }
        
        @media (max-width: 768px) {
            margin-bottom: 40px;
        }
        
        &__content{
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            @media (max-width: 1200px) {
                max-width: 991px;
            }
            @media (max-width: 991px) {
                max-width: 768px;
            }
            
            .content__title{
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 50px;
                
                @media (max-width: 991px) {
                    font-size: 32px;
                    margin-bottom: 40px;
                }
                
                @media (max-width: 768px) {
                    font-size: 28px;
                    margin-bottom: 30px;
                }
            }
            
            .content__list{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }
            
            .content__block{
                background-color: #121F2350;
                width: calc(50% - 10px);
                padding: 30px;
                border-radius: 19px;
                
                @media (max-width: 991px) {
                    width: 100%;
                }
                
                .block__description {
                    font-size: 16px;
                    line-height: 137%;
                }
            }
            
            .content__block-top {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 15px;
                
                img{
                    width: 60px;
                    height: 60px;
                    
                    @media (max-width: 768px) {
                        width: 50px;
                        height: 50px;
                    }
                }
                
                .block-top__title{
                    margin-left: 20px;
                    font-size: 24px;
                    font-weight: 600;
                    
                    @media (max-width: 768px) {
                        font-size: 20px;
                    }
                }
            }
        }
    }
    
    .projects {
        width: 100%;
        margin-bottom: 80px;
        box-sizing: border-box;
        
        @media (max-width: 991px) {
            margin-bottom: 60px;
        }
        
        @media (max-width: 768px) {
            margin-bottom: 40px;
        }
        
        &__content{
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            @media (max-width: 1200px) {
                max-width: 991px;
            }
            @media (max-width: 991px) {
                max-width: 768px;
            }
            
            
            .content__title {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 50px;
                
                @media (max-width: 991px) {
                    font-size: 32px;
                    margin-bottom: 40px;
                }
                
                @media (max-width: 768px) {
                    font-size: 28px;
                    margin-bottom: 30px;
                }
            }
            
            .content__list{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }
            
            .content__block {
                position: relative;
                background-color: #12152349;
                width: calc(33.333% - 14px);
                padding: 25px;
                border-radius: 19px;
                cursor: pointer;
                text-decoration: none;
                transition: all 0.1s ease;
                &:hover{
                    opacity: 0.9;
                }
                
                @media (max-width: 991px) {
                    width: calc(50% - 10px);
                }
                
                @media (max-width: 600px) {
                    width: 100%;
                    max-width: 400px;
                }
                
                img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 12px;
                    margin-bottom: 25px;
                }
                
                &:before{
                    content: "";
                    position: absolute;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    border-radius: 19px;
                    padding:1px;
                    background: linear-gradient(170deg, #ffffff30, #ffffff00);
                    -webkit-mask: 
                        linear-gradient(#fff 0 0) content-box, 
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }
                
                .block{
                    &__title {
                        margin-bottom: 20px;
                        font-size: 20px;
                        line-height: 117%;
                        font-weight: 500;
                    }
                    
                    &__bottom-list{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    
                    &__description{
                        font-size: 16px;
                        line-height: 148%;
                        -webkit-text-stroke-width: 1px;
                        -webkit-text-stroke-color:  #ffffff09;
                    }
                    
                    &__line{
                        width: 100%;
                        height: 2px;
                        background-color: #ffffff18;
                        margin: 12px 0;
                    }
                    
                    &__works, &__customer {
                        -webkit-text-stroke-width: 1px;
                        -webkit-text-stroke-color:  #ffffff09;
                        line-height: 148%;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>