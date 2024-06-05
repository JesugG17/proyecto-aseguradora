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
        <Service v-for="service in packageInfo?.services" :index="service.id" :name="service.name" :description="service.description" />
      </div>
      <button @click="selectPackage" class="adquire__button">Adquirir</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import Service from '../components/Service.vue';
import { getServicesByPackage } from '../services/packages/services.service';
import { usePackageStore } from '../store/package.store';

const route = useRoute();
const router = useRouter();
const packageInfo = ref();
const packageStore = usePackageStore();

const selectPackage = () => {
  packageStore.setSelectedPackage(packageInfo);
  router.push(`/register-car-info/${route.params.id}`);
}

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

.adquire__button {
  align-self: flex-end;
  background-color: var(--primary-green);
  opacity: 0.80;
  color: var(--white);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  transition: all 350ms ease-in;
  width: 10rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 350ms;

  &:hover {
    filter: brightness(110%)
  }
}
</style>