<template>
    <header>
        <nav>
            <router-link to="/">
              <img src="/img/logo.svg"  alt="logo"/>
            </router-link>
            <div class="profile">
              <p>Hola, Andrew!</p>
              <img src="/img/profile.png" alt="profile photo" />
            </div>
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
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0px 4rem;
    box-shadow: 3px 0px 10px rgba(0, 0, 0, 10%);
}
a{
    font-size: 1.5rem;
    color: var(--primary-green);
    
    & img {
      width: 64px;
      height: 64px;
    }

    &:hover{
        font-weight: 600;
    }
}

.profile {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>