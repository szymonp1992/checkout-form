<template>
  <TheHeader />
  <CheckoutForm />
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



    return {}
  }
}

</script>