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
            <span>* - required fields</span>
            <button type="submit" class="btn btn-dark btn-lg col-3 ps-3">Submit</button>
        </form>
    </div>
</template>

<script>

import { ref, onMounted } from 'vue'

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

        const entries = []

        let isFormValid = false;

        onMounted(() => {
            const checkoutForm = document.querySelector('.needs-validation');
            checkoutForm.addEventListener('submit', event => {
                if (!checkoutForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    isFormValid = false;
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
                    });
                    console.log(entries);
                    isFormValid = true;
                }

                checkoutForm.classList.add('was-validated')
            }, false)
        });

        return { email, name, surname, street, houseNo, apartmentNo, zipCode, city, country }
    }
}

</script>

<style>
.container {
    margin: 2rem;
}
</style>