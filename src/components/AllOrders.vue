<template>
    <div class="container ps-0">
        <div class="row ms-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-2">
            <div class="card col">
                <div class="card-header">
                    <img src="../assets/jfc.png" alt="JavaScript Fried Chicken" class="jfc-logo">
                </div>
                <div class="card-body">
                    <h3 class="card-title mb-4">Order no. 1</h3>
                    <p class="card-text"><strong>Ordered by:</strong> Szymon Podstufka</p>
                    <p class="card-text"><strong>Email:</strong> s.podstufka@gmail.com</p>
                    <p class="card-text"><strong>Delivery to:</strong> Pogodna 2/12, 44-119 Gliwice, Poland</p>
                    <h5 class="card-title">Ordered:</h5>
                    <p class="card-text">10 Chicken wings</p>
                    <p class="card-text">3 Chicken Tenders</p>
                    <p class="card-text">5 French Fries</p>
                    <h5 class="card-title">Total: 35.65€</h5>
                </div>
            </div>
            <div class="card col">
                <div class="card-header">
                    <img src="../assets/jfc.png" alt="JavaScript Fried Chicken" class="jfc-logo">
                </div>
                <div class="card-body">
                    <h3 class="card-title mb-4">Order no. 2</h3>
                    <p class="card-text"><strong>Ordered by:</strong> Natalia Podstufka</p>
                    <p class="card-text"><strong>Email:</strong> natalia.podstufka@gmail.com</p>
                    <p class="card-text"><strong>Delivery to:</strong> Wielkiej Niedźwiedzicy 25/10, 44-117 Gliwice,
                        Poland</p>
                    <h5 class="card-title">Ordered:</h5>
                    <p class="card-text">3 Chicken wings</p>
                    <p class="card-text">5 Chicken Tenders</p>
                    <p class="card-text">7 French Fries</p>
                    <h5 class="card-title">Total: 15.20€</h5>
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