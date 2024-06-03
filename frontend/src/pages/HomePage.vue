<template>
  <div class="main__container">
    <div class="cover__container">
      <figure>
        <img src="../assets/cover.jpg" alt="cover">
      </figure>
      <div class="welcome">
        <span>Dar tranquilidad</span>
        <p>Seguros que protegen tu tranquilidad</p>
      </div>
    </div>
    <div class="package__container">
      <h2>Paquetes que ofrecemos</h2>
      <div class="card__container">
        <PackageCard img="../assets/icon-package-1.png" title="Paquete 1" price="1000">
          <img src="../assets/icon-package-1.png" alt="">
        </PackageCard>
        <PackageCard img="../assets/icon-package-2.png" title="Paquete 2" price="1500"></PackageCard>
        <PackageCard img="../assets/icon-package-3.png" title="Paquete 3" price="2000"></PackageCard>
      </div>
    </div>
  </div>
  </template>

<script>
import PackageCard from '../components/PackageCard.vue';
export default {
  components: {
    PackageCard
  }
};
</script>


<style scoped>
  .main__container{
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    padding: 2rem 0;
    
  }
  .cover__container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & figure{
      width: 850px;
      object-fit: contain;  
      border-radius: 1rem;

      & img{
        border-radius: 1rem;
        width: 100%;
      }
    }
  }
  .welcome{
    align-items: center;
    background-color: var(--white);
    border-radius: 1rem;
    bottom: -35px;
    box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 1rem;
    padding: 1rem;
    position: absolute;

    & span{
      background-color: var(--light-green);
      border-radius: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 1.5rem;
    }
  }
  .package__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
  }
  .card__container{
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
  }
</style>