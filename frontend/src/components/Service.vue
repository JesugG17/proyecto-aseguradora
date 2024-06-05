<template>
    <div class="service" >
      <p class="first-paragraph" :style="{ backgroundColor: backgroundColor }">
        {{ name }}
      </p>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Service',
    props: {
      index: Number,
      name: String,
      description: String
    },
  data() {
    return {
      colors: ['#5faee340', '#239b5640', '#F8C47140'], 
      backgroundColor: ''
    };
  },
  mounted() {
    this.backgroundColor = this.colors[this.index % this.colors.length];
  }
  };
  </script>
  
  <style scoped>
  .service {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .first-paragraph {
    /* background-color: var(--light-blue); */
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