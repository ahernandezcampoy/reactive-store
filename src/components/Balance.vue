<template>
  <div>
    <h1>Balance result: {{ store.balance }}€</h1>
    <button @click="store.updateBalance(100)">+100</button>
    <button @click="store.updateBalance(-50)">-50</button>
  </div>
</template>

<script setup>
// Con la notación "setup" en el script, ya indicamos el uso de Composition
// y el export default implícito
import store from "../store/store";
</script>
