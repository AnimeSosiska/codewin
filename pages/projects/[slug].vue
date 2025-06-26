<script setup>
    const route = useRoute()
    const projects = useState('projects')
    const project = ref(null)
    project.value = projects.value?.find(p => p.slug === route.params.slug)
    if(!project.value) {
        const projectsData = await useFetch("https://api.los-bio.ru/projects/")
        projects.value = projectsData.data.value
        project.value = projects.value.find(p => p.slug === route.params.slug)
    } 
    let imageCounter = ref(0)
    const nextImage = () => imageCounter.value = (imageCounter.value + 1) % project.value.photos.length
</script>
<template lang="pug">
    .breadcrumbs__container.hidden-on-mobile
        .breadcrumbs__content
            a(href="/") Главная
            span
            a(href="#") Проекты
            span
            a {{project.title}}
    .project
        .project__left-side
            h1.left-side__title {{project.title}}
            div(v-for="block in project.description.blocks" :key="block.id")
                h2.left-side__header(v-if="block.type === 'header'") {{block.data.text}}
                p.left-side__description(v-else-if="block.type === 'paragraph'" v-html="block.data.text")
                ol.left-side__ordered-list(v-else-if="block.type === 'list'")
                    li.list__item(v-for="item in block.data.items" :key="item.index" v-html="item")
        .project__right-side
            .project__images
                .project__main-image
                    img(:src="`https://api.los-bio.ru/files/${project.photos[imageCounter].catalog}/${project.photos[imageCounter].name}`")
                    button(@click="nextImage") Следующее фото
                .images__list
                    img(
                        v-for="image, index in project.photos"
                        :key="image.id"
                        :src="`https://api.los-bio.ru/files/${project.photos[index].catalog}/${project.photos[index].name}`"
                        :class="index === imageCounter ? 'active' : ''"
                        @click="imageCounter = index"
                    )
</template>

<style lang="scss" scoped>
    .breadcrumbs{
        &__container{
            width: 100%;
            margin: 33px 0 37px;
            
            @media (max-width: 991px) {
                margin: 25px 0 30px;
            }
            
            @media (max-width: 768px) {
                margin: 20px 0 25px;
            }
            
            @media (max-width: 375px) {
                margin: 15px 0 20px;
                &.hidden-on-mobile{
                    display: none;
                }
            }
        }
        &__content{
            display: flex;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            font-size: 14px;
            line-height: 117%;
            @media (max-width: 1200px) {
                max-width: 991px;
            }
            
            @media (max-width: 991px) {
                max-width: 768px;
                padding: 0 20px;
            }
            
            @media (max-width: 375px) {
                font-size: 12px;
            }
            
            span{
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                margin: 0 14px;
                background-color: var(--main-color);
                border-radius: 50%;
                
                @media (max-width: 375px) {
                    margin: 0 8px;
                }
            }
            a{
                text-decoration: none;
            }
            a:last-of-type{
                color: #ffffff13;
                cursor:default;
            }
        }
    }
    .project {
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 69px;
        padding: 0 20px;
        
        @media (max-width: 1200px){
            max-width: 991px;
        }

        @media (max-width: 991px) {
            flex-direction: column;
            gap: 30px;
            margin-bottom: 50px;
            max-width: 768px;
        }
        
        @media (max-width: 768px) {
            margin-bottom: 40px;
            gap: 25px;
        }
        
        @media (max-width: 375px) {
            margin-bottom: 30px;
            gap: 20px;
            padding: 0 15px;
        }
        
        &__left-side{
            position: relative;
            background-color: #12151249;
            max-width: 60%;
            padding: 30px 40px 52px 40px;
            border-radius: 19px;
            
            @media (max-width: 991px) {
                max-width: 100%;
                padding: 25px 30px 40px;
            }
            
            @media (max-width: 768px) {
                padding: 20px 25px 35px;
            }
            
            @media (max-width: 375px) {
                padding: 15px 20px 30px;
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
                background: linear-gradient(160deg, #ffffff30, #ffffff00);
                -webkit-mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
            }
            .left-side {
                &__title{
                    font-size: 36px;
                    line-height: 150%;
                    font-weight: bold;
                    margin-bottom: 16px;
                    
                    @media (max-width: 991px) {
                        font-size: 32px;
                    }
                    
                    @media (max-width: 768px) {
                        font-size: 28px;
                    }
                    
                    @media (max-width: 375px) {
                        font-size: 24px;
                        margin-bottom: 12px;
                    }
                }
                &__header{
                    color: #ffffff90;
                    font-size: 20px;
                    line-height: 150%;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    
                    @media (max-width: 768px) {
                        font-size: 18px;
                        margin-bottom: 16px;
                    }
                    
                    @media (max-width: 375px) {
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                }
                &__description{
                    color: #ffffff90;
                    font-size: 18px;
                    line-height: 150%;
                    font-weight: 500;
                    margin-bottom: 15px;
                    
                    @media (max-width: 768px) {
                        font-size: 16px;
                    }
                    
                    @media (max-width: 375px) {
                        font-size: 14px;
                        margin-bottom: 12px;
                    }
                }
                &__ordered-list{
                    list-style: none;
                    counter-reset: list-counter;
                    .list__item{
                        padding-left: 40px;
                        margin-bottom: 16px;
                        counter-increment: list-counter;
                        position: relative;
                        font-size: 18px;
                        line-height: 160%;
                        font-weight: 500;
                        color: #ffffff90;
                        
                        @media (max-width: 768px) {
                            font-size: 16px;
                            padding-left: 35px;
                        }
                        
                        @media (max-width: 375px) {
                            font-size: 14px;
                            padding-left: 30px;
                            margin-bottom: 12px;
                        }
                        
                        &:before{
                            content: counter(list-counter);
                            position: absolute;
                            left: 0;
                            width: 24px;
                            height: 24px;
                            color: var(--main-color);
                            font-weight: bold;
                            font-size: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 2px solid var(--main-color);
                            border-radius: 50%;
                            
                            @media (max-width: 375px) {
                                width: 20px;
                                height: 20px;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
        &__right-side{
            max-width: calc(40% - 30px);
            
            @media (max-width: 991px) {
                max-width: 100%;
            }
        }
        &__images{
            .images__list{
                max-width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
                gap: 5px;
                
                @media (max-width: 375px) {
                    grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
                }
                
                img{
                    width: 100%;
                    object-fit: cover;
                    height: 64px;
                    border: 2px solid transparent;
                    transition: 0.5s ease;
                    
                    @media (max-width: 375px) {
                        height: 50px;
                    }
                }
                .active {
                    border-color: var(--main-color);
                }
            }
        }
        &__main-image{
            position: relative;
            margin-bottom: 10px;
            
            img{
                max-width: 100%;
                object-fit: cover;
                aspect-ratio: 3/2;
                border-radius: 10px 10px 0 0;
            }
            button {
                position: absolute;
                right: 1px;
                bottom: 6px;
                background-color: var(--main-color);
                max-width: 156px;
                padding: 8px;
                font-size: 14px;
                line-height: 141%;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                
                @media (max-width: 375px) {
                    font-size: 12px;
                    padding: 6px;
                    max-width: 140px;
                }
            }
        }
    }
</style>