<template>
  <TheHeader />
  <CheckoutForm />
  <button @click="incrementState">Increment</button>
  <h1>{{ number }}</h1>
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue'
import TheHeader from './components/TheHeader.vue'

import { computed } from 'vue'

import { useStore } from 'vuex'

export default {
  components: {
    CheckoutForm,
    TheHeader,
  },
  setup() {
    const store = useStore();

    const number = computed(() => {
      return store.getters.number;
    })

    function incrementState() {
      store.commit('increment')
    }

    return { number, incrementState }
  }
}

</script>