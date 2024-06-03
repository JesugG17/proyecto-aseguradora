<template>
  <div class="main__container">
    <div class="package__container">
      <div class="package__description">
        <h2>Nombre del paquete</h2>
        <p>$<span>5000</span> MNX anuales</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta ut unde deserunt quisquam natus!
          Temporibus amet in cumque itaque adipisci animi? Ad praesentium magni cum incidunt eum sequi soluta.</p>
      </div>
      <h3>Coberturas Incluidas</h3>
      <div class="coverages__container">
        <Service name="Daños a Terceros" description="Hasta $500,000 MXN"></Service>
        <Service name="Daños a Terceros" description="Hasta $500,000 MXN"></Service>
        <Service name="Daños a Terceros" description="Hasta $500,000 MXN"></Service>
        <Service name="Daños a Terceros" description="Hasta $500,000 MXN"></Service>
        <Service name="Daños a Terceros" description="Hasta $500,000 MXN"></Service>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageDetail",
  components: {
    Service 
  }
}
import Service from '../components/Service.vue';
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
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
gap: 2rem;


}
</style>