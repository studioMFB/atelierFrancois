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
    description: IProductDescription;
}

const props = defineProps<{
    product: IProduct;
}>();

const product = computed(() => {
    if (props.product)
        return props.product

    const _description: IProductDescription = {
        descriptionTitle: "A robust outdoor bench",
        description: "This is our classic bench built to resist the test of time.",
        descriptionPicture: "",
    };
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
        name: "Bench",
        model: "",
        description: _description,
        details: _details,
    }

    return _product;
});

</script>

<template>
    <div class="product-wrapper">
        <!-- {{ PageNameProviders.Products }} -->

        <div class="product-main-wrapper">
            <div class="product-main">
                <div>
                    <h3> {{ product.name }} </h3>
                </div>
                <!-- May be rotating thumbnail or may be model viewer -->
                <!-- <img :src="product.model" /> -->
                <!-- <div></div> -->
            </div>

            <div class="product-main__details-wrapper">
                <div v-for="(detail, i) in product.details" :key="i" class="product-main__details">
                    <p> {{ detail.label }}: </p>
                    <h4> {{ detail.value }} </h4>
                </div>
            </div>
        </div>
        <div class="product-description-wrapper">
            <img :src="product.description.descriptionPicture" />
            <span class="product-description">
                <h3> {{ product.description.descriptionTitle }} </h3>
                <p> {{ product.description.description }} </p>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: var(--max-width);
    height: 92%;

    overflow-y: auto;
    overflow-x: hidden;
}

.product-main-wrapper {
    display: flex;
    flex-direction: row;
}

.product-main {
    flex: 1;
    width: 30rem;
    height: 40rem;
    border-right: 1px solid var(--color-2);
    overflow: hidden;

    div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: rgba(128, 128, 128, .4);
        background: rgba(128, 128, 128, .4);
        
        h3 {
            text-align: center;
            width: 100%;
            height: 100%;
            padding: 2rem 0 0 0;
            margin: 0;
        }
    }
}

.product-main__details-wrapper {
    display: flex;
    flex-direction: column;
    width: 20%;
}

.product-main__details {
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
    flex-direction: row;
    align-items: bottom;
    height: 100%;
    border: 1px solid var(--color-2);

    img {
        width: 35rem;
        height: 20rem;
        background: rgba(128, 128, 128, .4);
    }
}

.product-description {
    flex: 1;
    // justify-content: center;
    padding: 0 2rem;
    border-left: 1px solid var(--color-2);

    p {
        text-align: left;
    }
}
</style>