<template>
    <header>
        <nav>
            <router-link to="/">Inicio</router-link>
            <router-link to="/package-details">Servicios</router-link>
            <router-link to="/">Contacto</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style scoped>
nav{
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;
    box-shadow: 3px 0px 10px rgba(0, 0, 0, 10%);
}
a{
    font-size: 1.5rem;
    color: var(--primary-green);
    

    &:hover{
        font-weight: 600;
    }
}
</style>