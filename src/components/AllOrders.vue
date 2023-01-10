<template>
    <div class="container overflow-hidden ps-0">
        <div class="row ms-2 gx-3 gy-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
            <div class="col" v-for="order in allOrders">
                <div class="card">
                    <div class="card-header">
                        <img src="../assets/jfc.png" alt="JavaScript Fried Chicken" class="jfc-logo">
                    </div>
                    <div class="card-body">
                        <h3 class=" card-title mb-4">Order no. {{ order.id }}</h3>
                        <p class="card-text"><strong>Ordered by:</strong> {{ order.name }}
                            {{ order.surname }}</p>
                        <p class="card-text"><strong>Email:</strong> {{ order.email }}</p>
                        <p class="card-text"><strong>Delivery to:</strong> {{ order.street }} {{ order.houseNo }}{{
                            order.apartmentNo ? "/" : ""
                        }}{{ order.apartmentNo ? order.apartmentNo : "" }}, {{
    order.zipCode
}} {{ order.city }},
                            {{ order.country }}</p>
                        <h5 class="card-title">Ordered:</h5>
                        <p class="card-text">{{ order.chickenWings }} Chicken wings</p>
                        <p class="card-text">{{ order.chickenTenders }} Chicken Tenders</p>
                        <p class="card-text">{{ order.frenchFries }} French Fries</p>
                        <h5 class="card-title">Total: {{ parseInt(order.totalPrice).toFixed(2) }}€</h5>
                    </div>
                </div>
            </div>
        </div>
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

<style>
.red {
    background-color: red;
    height: 100px;
}

.jfc-logo {
    width: 40%;
}

.card-header {
    display: flex;
    justify-content: center;
}

h3.card-title {
    text-align: center;
}
</style>