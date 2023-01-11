<template>
    <div class="container">
        <form class="row g-3 needs-validation checkout-form" novalidate>
            <div class="input-group">
                <div class="form-floating">
                    <input type="email" id="email" class="form-control" placeholder="E-mail" v-model="email" required />
                    <div class="invalid-feedback">
                        Please provide a valid e-mail address.
                    </div>
                    <label for="email">E-mail *</label>
                </div>
            </div>
            <div class="input-group">
                <div class="form-floating">
                    <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" required />
                    <div class="invalid-feedback">
                        Please provide a valid name.
                    </div>
                    <label for="name">Name *</label>
                </div>
                <div class="form-floating">
                    <input type="text" id="surname" class="form-control" placeholder="Surname" v-model="surname"
                        required />
                    <div class="invalid-feedback">
                        Please provide a valid surname.
                    </div>
                    <label for="surname">Surname *</label>
                </div>

            </div>
            <div class="form-floating col-12 col-md-6">
                <input type="text" id="street" class="form-control" placeholder="Street address" v-model="street"
                    required />
                <div class="invalid-feedback">
                    Please provide street name.
                </div>
                <label for="street" class="ps-3">Street address *</label>
            </div>
            <div class="form-floating col-6 col-md-3">
                <input type="text" id="house-number" class="form-control" placeholder="House no." v-model="houseNo"
                    required />
                <div class="invalid-feedback">
                    Please provide house number.
                </div>
                <label for="house-number" class="ps-3">House no. *</label>
            </div>
            <div class="form-floating col-6 col-md-3">
                <input type="text" id="apartment-number" class="form-control" placeholder="Apartment no."
                    v-model="apartmentNo" />
                <label for="apartment-number" class="ps-3">Apartment no.</label>
            </div>
            <div class="form-floating col-4">
                <input type="text" id="zip-code" class="form-control" placeholder="Zip code" v-model="zipCode"
                    required />
                <div class="invalid-feedback">
                    Please provide a valid zip code.
                </div>
                <label for="zip-code" class="ps-3">Zip code *</label>
            </div>
            <div class="form-floating col-4">
                <input type="text" id="city" class="form-control" placeholder="City" v-model="city" required />
                <div class="invalid-feedback">
                    Please provide city.
                </div>
                <label for="city" class="ps-3">City *</label>
            </div>
            <div class="form-floating col-4">
                <input type="text" id="country" class="form-control" placeholder="Country" v-model="country" required />
                <div class="invalid-feedback">
                    Please provide country.
                </div>
                <label for="country" class="ps-3">Country *</label>
            </div>
            <span>* - required fields</span>
            <div class="col-4">
                <label for="chickenWings" class="form-label">Chicken wings: <span class="orderNumberDisplay">{{
                    chickenWingsNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="chickenWings"
                    v-model="chickenWings">
                <p>Price: {{ chickenWingsPrice }} €</p>
            </div>
            <div class="col-4">
                <label for="chickenTenders" class="form-label">Chicken tenders: <span class="orderNumberDisplay">{{
                    chickenTendersNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="chickenTenders"
                    v-model="chickenTenders">
                <p>Price: {{ chickenTendersPrice }} €</p>
            </div>
            <div class="col-4">
                <label for="beefBurgers" class="form-label">French fries: <span class="orderNumberDisplay">{{
                    frenchFriesNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="frenchFries" v-model="frenchFries">
                <p>Price: {{ frenchFriesPrice }} €</p>
            </div>
            <p class="empty-error-order" :style="{ 'display': isOrderEmpty ? 'block' : 'none' }">
                You need to order at least one thing from our menu to proceed with the order.
            </p>
            <h2>Total: {{ totalPrice }} €</h2>
            <button type="submit" class="btn btn-dark btn-lg col-3 ms-2">Submit</button>
        </form>
    </div>
</template>

<script>

import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {



    setup() {
        const store = useStore();


        const email = ref('');
        const name = ref('');
        const surname = ref('');
        const street = ref('');
        const houseNo = ref('');
        const apartmentNo = ref('');
        const zipCode = ref('');
        const city = ref('');
        const country = ref('');
        const chickenWings = ref(0);
        const chickenTenders = ref(0);
        const frenchFries = ref(0);
        const chickenWingsNumber = computed(() => {
            if (chickenWings.value === 0) {
                return '0'
            } else {
                isOrderEmpty.value = false;
                return '🐥'.repeat(chickenWings.value) + ' ' + chickenWings.value
            }
        })
        const chickenTendersNumber = computed(() => {
            if (chickenTenders.value === 0) {
                return '0'
            } else {
                isOrderEmpty.value = false;
                return '🐔'.repeat(chickenTenders.value) + ' ' + chickenTenders.value
            }
        })
        const frenchFriesNumber = computed(() => {
            if (frenchFries.value === 0) {
                return '0'
            } else {
                isOrderEmpty.value = false;
                return '🍟'.repeat(frenchFries.value) + ' ' + frenchFries.value
            }
        })
        const chickenWingsPrice = computed(() => {
            return (chickenWings.value * 1.15).toFixed(2)
        })
        const chickenTendersPrice = computed(() => {
            return (chickenTenders.value * 2.10).toFixed(2)
        })
        const frenchFriesPrice = computed(() => {
            return (frenchFries.value * 1.25).toFixed(2)
        })
        const totalPrice = computed(() => {
            return (chickenWings.value * 1.15 + chickenTenders.value * 2.10 + frenchFries.value * 1.25).toFixed(2)
        })

        const isOrderEmpty = ref(false)


        onMounted(() => {
            const checkoutForm = document.querySelector('.needs-validation');
            checkoutForm.addEventListener('submit', event => {

                if (!checkoutForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    checkoutForm.classList.add('was-validated')
                    if (totalPrice.value === "0.00") {
                        isOrderEmpty.value = true;
                    }
                } else {
                    event.preventDefault();
                    if (totalPrice.value === "0.00") {
                        isOrderEmpty.value = true;
                        return
                    }
                    store.dispatch('addOrderEntry', {
                        id: store.getters.allOrders.length + 1,
                        email: email.value,
                        name: name.value,
                        surname: surname.value,
                        street: street.value,
                        houseNo: houseNo.value,
                        apartmentNo: apartmentNo.value,
                        zipCode: zipCode.value,
                        city: city.value,
                        country: country.value,
                        chickenWings: chickenWings.value,
                        chickenTenders: chickenTenders.value,
                        frenchFries: frenchFries.value,
                        totalPrice: totalPrice.value
                    });
                    email.value = ''
                    name.value = ''
                    surname.value = ''
                    street.value = ''
                    houseNo.value = ''
                    apartmentNo.value = ''
                    zipCode.value = ''
                    city.value = ''
                    country.value = ''
                    chickenWings.value = 0
                    chickenTenders.value = 0
                    frenchFries.value = 0
                    totalPrice.value = 0
                    if (checkoutForm.classList.contains('was-validated')) {
                        checkoutForm.classList.remove('was-validated')
                    }
                }

            }, false)
        });

        return { email, name, surname, street, houseNo, apartmentNo, zipCode, city, country, chickenWings, chickenTenders, frenchFries, chickenWingsNumber, chickenTendersNumber, frenchFriesNumber, chickenWingsPrice, chickenTendersPrice, frenchFriesPrice, totalPrice, isOrderEmpty }
    }
}

</script>

<style>
.container {
    margin: 2rem;
}

.orderNumberDisplay {
    font-weight: bold;
}

.empty-error-order {
    color: red;
}
</style>