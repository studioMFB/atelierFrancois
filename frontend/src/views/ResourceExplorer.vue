<script setup lang="ts">
// const img1 = new URL("./modelViewer/textures/terrains/mountain/1/thumb.png", import.meta.url).toString();
// const img2 = new URL("./modelViewer/textures/terrains/mountain/2/thumb.png", import.meta.url).toString();
// const img3 = new URL("./modelViewer/textures/terrains/mountain/3/thumb.png", import.meta.url).toString();
</script>

<template>
    <div class="menu">
        <div class="menu__title">
            <p>Terrains</p>
        </div>
        
        <!-- <ul id="menu__resources" class="menu__resources">
            <li class="menu__resources--tile" tabindex="1">
                <button class="menu__resources--btn">
                    <img class="menu__resources--img" title="t1" v-bind:src=img1>
                </button>
            </li>
            <li class="menu__resources--tile" tabindex="2">
                <button class="menu__resources--btn">
                    <img class="menu__resources--img" title="t2" v-bind:src=img2>
                </button>
            </li>
            <li class="menu__resources--tile" tabindex="3">
                <button class="menu__resources--btn">
                    <img class="menu__resources--img" title="t3" v-bind:src=img3>
                </button>
            </li>
            <li class="menu__resources--tile" tabindex="3">
                <button class="menu__resources--btn">
                    <img class="menu__resources--img" title="t3" v-bind:src=img3>
                </button>
            </li>
        </ul> -->

        <!-- <div class="menu__btn--container">
        <MovebuttonView name="up"></MovebuttonView>
        <MovebuttonView name="left"></MovebuttonView>
    </div> -->
    </div>
</template>

<style>
.menu {
    z-index: 10;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    top: 0;
    right: 0;
    width: 14.5rem;
    height: 100%;
    background-color: var(--menu--bkg);
}

.menu__title {
    position: inherit;
    top: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--menu__title--txt);
    width: 100%;
    height: 2rem;
    padding: 1rem;
    border-bottom: 1px solid var(--menu__title--txt);
    background: #edb721;
}

.menu__resources {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    top: 4rem;
    padding: .4rem;

    list-style-type: none;
}

.menu__resources--btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    margin: .2rem;
    padding: 3.1rem;
    border-radius: 5px;
    border: 1px solid #edb721;
    overflow: hidden;

    &:hover {
        opacity: .8;
    }
}

.menu__resources--img {
    width: auto;
    height: auto;
}

/* 
.menu__btn--container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 30rem;
    height: 100%;
    margin: auto auto;
} */
</style>