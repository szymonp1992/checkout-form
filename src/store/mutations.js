export default {
  addOrderEntry(state, payload) {
    state.orders.push(payload);
    console.log(state.orders);
  },
};
