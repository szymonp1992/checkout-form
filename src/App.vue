<template>
  <TheHeader />
  <CheckoutForm />
  <AllOrders />
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue'
import TheHeader from './components/TheHeader.vue'
import AllOrders from './components/AllOrders.vue'

export default {
  components: {
    CheckoutForm,
    TheHeader,
    AllOrders,
  },
}

</script>