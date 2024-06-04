<template>
    <div class="service">
      <p class="first-paragraph" >
        {{ name }}
      </p>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Service',
    props: {
      name: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .service {
    display: flex;
    flex-direction: column;
  }
  
  .first-paragraph {
    background-color: var(--light-blue);
    color: var(--dark-blue);
    font-weight: 600;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    width: fit-content;
  }
  
  .service > p:nth-child(2) {
    opacity: 0.70;
    font-weight: 500;
  }
  </style>