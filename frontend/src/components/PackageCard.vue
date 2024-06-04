<template>
    <div class="card">
        <figure>
             <img :src="img" :lt="'icon' + title" />
        </figure>
            <h3>{{ title }}</h3>
            <p>${{ price }} MXN <span>/anual</span></p>
    </div>
</template>

<script>
export default {
    name: 'PackageCard',
    props: {
        img: String,
        title: String,
        price: Number
    }
};
</script>

<style scoped>
.card {
    border-radius: 1rem;
    box-shadow: 0px 172px 69px rgba(0, 0, 0, 0.01), 0px 97px 58px rgba(0, 0, 0, 0.02), 0px 43px 43px rgba(0, 0, 0, 0.03), 0px 11px 24px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 350px;

    

    & figure {
        width: 100%px;
        height: 350px;
        object-fit: cover;

        & img {
            width: 100%;
            height: 100%;
        }
    }
    & h3{
        font-size: 1.5rem;
    }
    & p{
        font-weight: 600;
        & span{
            opacity: 0.50;
            color: var(--secondary-orange);
            font-size: 0.8rem;
        }
    }

}
.card:hover{
        cursor: pointer;
        box-shadow: 4px 4px 25px var( --light-green);
    }

</style>