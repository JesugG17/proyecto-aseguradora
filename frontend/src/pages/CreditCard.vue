<template>
  <div class="wrapper">
    <div class="header" />
    <div class="form__container">
      <div class="header__form">
        <h2>Realizar pago</h2>
        <p>Pago con tarjeta de credito</p>
      </div>
      <form class="form">
        <div class="input_container">
          <label for="cardNumber">Numero de tarjeta</label>
          <input type="text" id="cardNumber" placeholder="1234  5678  9101  1121" />
        </div>
        <div class="input_container">
          <label for="expirationDay">Fecha de expiración</label>
          <input type="text" id="expirationDay" placeholder="MM/YY" />
        </div>
        <div class="input_container">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />
        </div>
        <div class="check__container">
          <label for="checkCard">Recordar tarjeta</label>
          <input type="checkbox" id="checkCard">
        </div>
      </form>
      <button class="pay__button">
        Pagar
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border-radius: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-poppins);
  margin: 20px auto;
  width: fit-content;
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

      &:focus {
        border: 1px solid var(--gray);
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
</style>