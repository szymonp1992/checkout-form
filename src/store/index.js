import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      orders: [
        {
          id: 1,
          email: "john@doe.com",
          name: "John",
          surname: "Snow",
          street: "Raven",
          houseNo: 10,
          apartmentNo: 12,
          zipCode: "55-678",
          city: "Bronx NY",
          country: "USA",
          chickenWings: 1,
          chickenTenders: 1,
          frenchFries: 1,
          totalPrice: 4.5,
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
