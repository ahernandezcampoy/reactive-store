<template>
  <div>
    Tell me your name: <input type="text" v-model="persona.name" />
    <h1>Hello {{ persona.name }}</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    // Para retornar muchos elementos, usamos "reactive"
    // para englobarlos en un formato JSON
    const persona = reactive({
      name: "Alex",
      lastname: "HC",
      age: "37",
    });

    return { persona };
  },
};
</script>
