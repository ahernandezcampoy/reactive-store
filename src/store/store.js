import { reactive } from "vue";

// Con la notación "reactive" evitamos devolver una ristra de elementos
// y devolvemos solamente uno en formato JSON.
const store = reactive({
  balance: 1000,
  updateBalance(value) {
    this.balance += value;
  },
  addBalance() {
    this.balance += 100;
  },
  subBalance() {
    this.balance -= 100;
  },
});

export default store;
