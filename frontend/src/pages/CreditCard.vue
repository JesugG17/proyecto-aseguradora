<template>
  <div class="wrapper">
    <div class="header" />
    <div class="form__container">
      <div class="header__form">
        <h2>Realizar pago</h2>
        <p>Pago con tarjeta de credito</p>
      </div>
      <form @submit.prevent="onSubmit" class="form">
        <div class="input_container">
          <div>

          </div>
          <div class="brand">
            <label for="cardNumber">Numero de tarjeta</label>
            <img v-if="brand === 'master'" src="/img/mastercard.svg" alt="mastercard logo" />
            <img v-if="brand === 'visa'" src="/img/visa.svg" alt="visa logo" />
          </div>
          <mask-input
            :class="errors.cardNumber.length > 0 ? 'error' : ''"
            placeholder="xxxx xxxx xxxx xxxx"
            :mask="'0000 0000 0000 0000'"
            v-model="cardNumber"
            @accept:unmasked="changeCreditCardBrand"
          />
          <p class="error__message" v-if="errors.cardNumber">{{ errors.cardNumber }}</p>
        </div>
        <div class="input_container">
          <label for="expirationDay">Fecha de expiración</label>
          <mask-input
            :class="errors.expiration.length > 0 ? 'error' : ''"
            v-model="expiration"
            :mask="'00{/}00'"
            placeholder="MM/YY"
          />
          <p class="error__message" v-if="errors.expiration">{{ errors.expiration }}</p>
        </div>
        <div class="input_container">
          <label for="cvv">CVV</label>
          <input :class="errors.cvv.length > 0 ? 'error' : ''" v-model="cvv" type="password" id="cvv" placeholder="123" maxlength="3"/>
          <p class="error__message" v-if="errors.cvv">{{ errors.cvv }}</p>
        </div>
        <div class="check__container">
          <label for="checkCard">Recordar tarjeta</label>
          <input type="checkbox" id="checkCard">
        </div>
      </form>
      <button :disabled="loading" @click.prevent="onSubmit" class="pay__button">
        <span v-if="!loading">Pagar ${{ packageStore.selectedPackage.price }}</span>
        <div v-if="loading" class="loader" />
      </button>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref, watch } from 'vue';
import { brandMatcher } from '../utils/brandMatcher';
import { httpClient } from '../services/httpClient';
import { usePackageStore } from '../store/package.store';
import { useRouter } from 'vue-router';

const router = useRouter();
const cardNumber = ref('');
const expiration = ref('');
const cvv = ref('');
const brand = ref('');
const errors = ref({
  cardNumber: '',
  expiration: '',
  cvv: '',
});
const loading = ref(false);
const packageStore = usePackageStore();

const onSubmit = () => {
  if (cardNumber.value.length < 19) {
    errors.value = {
      ...errors.value,
      cardNumber: 'El numero de tarjeta es requerido'
    }
  }

  if (expiration.value.length < 5) {
    errors.value = {
      ...errors.value,
      expiration: 'La expiracion es requerida'
    }
  }

  if (cvv.value.length < 3) {
    errors.value = {
      ...errors.value,
      cvv: 'El cvv es requerido'
    }
  }

  const someError = Object.keys(errors.value).some(key => errors.value[key].length > 0);
  if (someError) {
    return;
  }

  const body = {
    userId: 1,
    policyId: 6
  }
  loading.value = true;
  
  setTimeout(async() => {
    await httpClient.post('/payments/create-payment', body);
    await Swal.fire({
      title: 'Pago exitoso',
      text: 'Su pago fue procesado exitosamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    loading.value = false;
    router.push('/');
  }, 2000);

}

const changeCreditCardBrand = (value) => {
  if (value.length < 6) return;

  const matchedBrand = brandMatcher(value);
  brand.value = matchedBrand;
}

watch([cvv, expiration, cardNumber], (newValue, oldValue) => {
  const [newCvv, newExpiration, newCardNumber] = newValue;
  const [oldCvv, oldExpiration, oldCardNumber] = oldValue;

  if (newCvv !== oldCvv && errors.value.cvv.length > 0) {
    errors.value = {
      ...errors.value,
      cvv: ''
    };
  }

  if (newExpiration !== oldExpiration && errors.value.expiration.length > 0) {
    errors.value = {
      ...errors.value,
      expiration: ''
    };
  }

  if (newCardNumber !== oldCardNumber && errors.value.cardNumber.length > 0) {
    errors.value = {
      ...errors.value,
      cardNumber: ''
    };
  }
});

</script>

<style scoped>
.wrapper {
  border-radius: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-poppins);
  margin: 20px auto;
  width: 700px;
  overflow: hidden;
}

.header {
  height: 4rem;
  background: linear-gradient(to right, var(--gradient--green), var(--secondary-cyan));
}

.form__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  padding: 1rem 2rem;
}

.header__form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & p {
    border-top: 2px solid var(--gray);
    font-weight: 600;
    padding: 0.25rem 0;
  }
}

.form,
.header__form {
  width: 100%;
}

.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  &> :first-child {
    grid-column: 1 / 3;
    grid-row: 1/2;
  }

  &> :nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  &> :nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
}

.input_container{
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 

    & input {
      background-color: var(--light-gray);
      border: 1px transparent;
      border-radius: 0.5rem;
      outline: none;
      padding: 0.75rem;
      border: 1px solid transparent;

      &:focus {
        border-color: var(--gray);
      }

      &::placeholder {
        opacity: 0.70;
      }
    }
  }
  .check__container {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.25rem;
  grid-column: 1/2;
  grid-row: 3/4;
  justify-content: start;
  & :hover{
    cursor: pointer;
  }
}

.pay__button {
  align-self: flex-end;
  background-color: var(--primary-green);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  opacity: 0.80;
  outline: none;
  text-transform: uppercase;
  transition: all 350ms ease-in;
  width: 10rem;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 5px;

  & img {
    width: 24px;
    height: 24px;
  }
}

.error {
  border: 1px solid red !important;
  background-color: rgb(243, 210, 210) !important;
}

.error__message {
  opacity: 0.5;
}

.loader {
  border-top: 2px solid white;
  border-right: 2px solid white;
  animation: loader 2s infinite;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 auto;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>