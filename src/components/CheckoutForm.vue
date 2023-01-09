<template>
    <div class="container">
        <form class="row g-3 needs-validation checkout-form" novalidate>
            <div class="input-group ps-0">
                <div class="form-floating">
                    <input type="email" id="email" class="form-control" placeholder="E-mail" v-model="email" required />
                    <div class="invalid-feedback">
                        Please provide a valid e-mail address.
                    </div>
                    <label for="email" class="ps-3">E-mail *</label>
                </div>
            </div>
            <div class="input-group ps-0">
                <div class="form-floating">
                    <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" required />
                    <div class="invalid-feedback">
                        Please provide a valid name.
                    </div>
                    <label for="name" class="ps-3">Name *</label>
                </div>
                <div class="form-floating">
                    <input type="text" id="surname" class="form-control" placeholder="Surname" v-model="surname"
                        required />
                    <div class="invalid-feedback">
                        Please provide a valid surname.
                    </div>
                    <label for="surname" class="ps-3">Surname *</label>
                </div>

            </div>
            <div class="form-floating col-12 col-md-6 ps-0">
                <input type="text" id="street" class="form-control" placeholder="Street address" v-model="street"
                    required />
                <div class="invalid-feedback">
                    Please provide street name.
                </div>
                <label for="street" class="ps-3">Street address *</label>
            </div>
            <div class="form-floating col-6 col-md-3 ps-0">
                <input type="text" id="house-number" class="form-control" placeholder="House no." v-model="houseNo"
                    required />
                <div class="invalid-feedback">
                    Please provide house number.
                </div>
                <label for="house-number" class="ps-3">House no. *</label>
            </div>
            <div class="form-floating col-6 col-md-3 ps-0">
                <input type="text" id="apartment-number" class="form-control" placeholder="Apartment no."
                    v-model="apartmentNo" />
                <label for="apartment-number" class="ps-3">Apartment no.</label>
            </div>
            <div class="form-floating col-4 ps-0">
                <input type="text" id="zip-code" class="form-control" placeholder="Zip code" v-model="zipCode"
                    required />
                <div class="invalid-feedback">
                    Please provide a valid zip code.
                </div>
                <label for="zip-code" class="ps-3">Zip code *</label>
            </div>
            <div class="form-floating col-4 ps-0">
                <input type="text" id="city" class="form-control" placeholder="City" v-model="city" required />
                <div class="invalid-feedback">
                    Please provide city.
                </div>
                <label for="city" class="ps-3">City *</label>
            </div>
            <div class="form-floating col-4 ps-0">
                <input type="text" id="country" class="form-control" placeholder="Country" v-model="country" required />
                <div class="invalid-feedback">
                    Please provide country.
                </div>
                <label for="country" class="ps-3">Country *</label>
            </div>
            <span class="ps-0">* - required fields</span>
            <div class="col-4 ps-0">
                <label for="chickenWings" class="form-label">Chicken wings: <span class="orderNumberDisplay">{{
                    chickenWingsNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="chickenWings"
                    v-model="chickenWings">
                <p>Price: {{ chickenWingsPrice }} €</p>
            </div>
            <div class="col-4 ps-0">
                <label for="chickenTenders" class="form-label">Chicken tenders: <span class="orderNumberDisplay">{{
                    chickenTendersNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="chickenTenders"
                    v-model="chickenTenders">
                <p>Price: {{ chickenTendersPrice }} €</p>
            </div>
            <div class="col-4 ps-0">
                <label for="beefBurgers" class="form-label">French fries: <span class="orderNumberDisplay">{{
                    frenchFriesNumber
                }}</span></label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="frenchFries" v-model="frenchFries">
                <p>Price: {{ frenchFriesPrice }} €</p>
            </div>
            <h2 class="ps-0">Total: {{ totalPrice }} €</h2>


            <button type="submit" class="btn btn-dark btn-lg col-3 ps-3">Submit</button>
        </form>
    </div>
</template>

<script>

import { ref, computed, onMounted } from 'vue'

export default {



    setup() {
        const email = ref('');
        const name = ref('');
        const surname = ref('');
        const street = ref('');
        const houseNo = ref('');
        const apartmentNo = ref('');
        const zipCode = ref('');
        const city = ref('');
        const country = ref('');
        const chickenWings = ref(0)
        const chickenTenders = ref(0)
        const frenchFries = ref(0)
        const chickenWingsNumber = computed(() => {
            if (chickenWings.value === 0) {
                return '0'
            } else {
                return '🐥'.repeat(chickenWings.value) + ' ' + chickenWings.value
            }
        })
        const chickenTendersNumber = computed(() => {
            if (chickenTenders.value === 0) {
                return '0'
            } else {
                return '🐔'.repeat(chickenTenders.value) + ' ' + chickenTenders.value
            }
        })
        const frenchFriesNumber = computed(() => {
            if (frenchFries.value === 0) {
                return '0'
            } else {
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

        const entries = []



        onMounted(() => {
            const checkoutForm = document.querySelector('.needs-validation');
            checkoutForm.addEventListener('submit', event => {
                if (!checkoutForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    entries.push({
                        email,
                        name,
                        surname,
                        street,
                        houseNo,
                        apartmentNo,
                        zipCode,
                        city,
                        country,
                        chickenWingsNumber,
                        chickenTendersNumber,
                        frenchFriesNumber,
                    });
                    console.log(entries);
                }

                checkoutForm.classList.add('was-validated')
            }, false)
        });

        return { email, name, surname, street, houseNo, apartmentNo, zipCode, city, country, chickenWings, chickenTenders, frenchFries, chickenWingsNumber, chickenTendersNumber, frenchFriesNumber, chickenWingsPrice, chickenTendersPrice, frenchFriesPrice, totalPrice }
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
</style>