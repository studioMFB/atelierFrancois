<script setup lang="ts">
import { PageNameProviders } from '@/providers';
import { computed } from 'vue';


interface IProductDescription {
    descriptionTitle: string;
    description: string;
    descriptionPicture: string;
}
interface IProductDetails {
    label: string;
    value: string;
}

interface IProduct {
    name: string;
    model: string; // May get custom type Model?
    details: IProductDetails[];
    descriptions: IProductDescription[];
}

const props = defineProps<{
    product?: IProduct;
}>();

const product = computed(() => {
    if (props.product)
        return props.product

    const _description1: IProductDescription = {
        descriptionTitle: "A robust outdoor bench",
        description: "This is our classic bench built to resist the test of time.",
        descriptionPicture: "",
    };
    const _description2: IProductDescription = {
        descriptionTitle: "A robust outdoor bench",
        description: "This is our classic bench built to resist the test of time.",
        descriptionPicture: "",
    };
    const _descriptions: IProductDescription[] = [_description1, _description2];

    const material: IProductDetails = {
        label: "material",
        value: "Pine",
    }
    const price: IProductDetails = {
        label: "price",
        value: "£100",
    }
    const _details: IProductDetails[] = [material, price];
    const _product: IProduct = {
        name: "Soft Lounge Chair",
        model: "",
        descriptions: _descriptions,
        details: _details,
    }

    return _product;
});

</script>

<template>
    <div class="product-wrapper no-scroll-bar">
        <!-- {{ PageNameProviders.Products }} -->

        <div class="product-main-wrapper">
            <div class="product-main">
                <div>
                    <h1> {{ product.name }} </h1>
                </div>
                <!-- May be rotating thumbnail or may be model viewer -->
                <!-- <img :src="product.model" /> -->
                <!-- <div></div> -->
            </div>

            <div class="product-main__details-wrapper">
                <div v-for="(detail, i) in product.details" :key="i" class="product-main__detail">
                    <p> {{ detail.label }}: </p>
                    <h4> {{ detail.value }} </h4>
                </div>
            </div>
        </div>
        <div class="product-description-wrapper">
            <div v-for="(description, i) in product.descriptions" :key="i" class="product-description">
                <img :src="description.descriptionPicture" />
                <div class="product-description__text">
                    <span>
                        <h3> {{ description.descriptionTitle }} </h3>
                        <p> {{ description.description }} </p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: var(--max-width);
    height: 100%;
    height: 100%;
    // height: 92%;

    overflow-y: auto;
    overflow-x: hidden;
}

.product-main-wrapper {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--color-2);
}

.product-main {
    flex: 1;
    // width: 60rem;
    height: 50rem;
    border-right: 1px solid var(--color-2);
    overflow: hidden;

    div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: rgba(255, 255, 255, 0.4);
        background: rgba(255, 255, 255, 0.4);

        h1 {
            width: 100%;
            height: 100%;
            padding: 2rem 0 0 0;
            margin: 0;
            text-align: center;
            font-size: var(--h4-font-size);
            font-weight:100;
            color: var(--color-gray-40);
        }
    }
}

.product-main__details-wrapper {
    display: flex;
    flex-direction: column;
    width: 20%;
}

.product-main__detail {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: start;
    height: 6rem;
    border-bottom: 1px solid var(--color-2);

    h4 {
        padding: 0 .2rem;
    }

    p {
        padding: 0 .5rem;
    }
}

.product-description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: bottom;
}
.product-description {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid var(--color-2);

    img {
        border: none;
        outline: none;
        width: 50%;
        height: 50rem;
        background: rgba(255, 255, 255, 0.4);
    }
}
.product-description__text {
    display: flex;
    align-items: end;
    padding: 0 2rem;
    border-left: 1px solid var(--color-2);

    span{
        display: flex;
        flex-direction: column;

        h3{
            margin: 0;
        }
        
        p {
            text-align: left;
        }
    }
}
</style>