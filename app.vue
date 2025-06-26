<script setup>
</script>

<template lang="pug">
    .main
        Header
        NuxtPage       
        Footer
</template>

<style lang="scss">
    @import url('https://fonts.cdnfonts.com/css/gilroy-bold');
    :root{
        --vc-pgn-width: 18px;
        --vc-pgn-height: 18px;
        --vc-pgn-border-radius: 50%;
        --vc-pgn-background-color: #ffffff05;
        --main-color: #1078D7;
        --main-color-hover: #1077d7cc;
    }
    * {
        font-family: 'Gilroy-medium', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: white;
    }
    body {
        background-image: linear-gradient(140deg, #00011A, #0f0f0f,);
    }
    .main {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-image: url("./assets/svg/background.svg");
        background-size:cover;
        background-repeat: no-repeat;
    }
</style>