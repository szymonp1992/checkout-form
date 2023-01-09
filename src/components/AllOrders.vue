<template>
    <div class="container ps-0">
        <h2>{{ allOrders }}</h2>
    </div>

</template>

<script>
import { computed } from 'vue'

import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();

        const allOrders = computed(() => { return store.getters.allOrders })

        return { allOrders }
    }
}
</script>