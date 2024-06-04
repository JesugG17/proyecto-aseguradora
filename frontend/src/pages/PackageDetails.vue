<template>
  <div class="main__container">
    <div class="package__container">
      <div class="package__description">
        <h2>{{ packageInfo?.name }}</h2>
        <p>$<span>{{ packageInfo?.price }}</span> MNX anuales</p>
        <p>
          {{ packageInfo?.description }}
        </p>
      </div>
      <h3>Coberturas Incluidas</h3>
      <div class="coverages__container">
        <Service v-for="service in packageInfo.services" :name="service.name" :description="service.description" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Service from '../components/Service.vue';
import { getServicesByPackage } from '../services/packages/services.service';

const route = useRoute();
const packageInfo = ref();

const fetchData = async() => {
  const packageId = route.params.id;
  packageInfo.value = await getServicesByPackage(packageId);
}

fetchData();
</script>

<style scoped>

.main__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.package__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.15);
  margin: 1.5rem auto;
  padding: 2rem 8rem;
  width: 80%;
}

.package__description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;

  &> :nth-child(2) {
    color: var(--primary-green);
    font-weight: 600;
  }

  &> :nth-child(3) {
    font-weight: 400;
    opacity: 0.60;
  }
}

.coverages__container {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;

}
</style>