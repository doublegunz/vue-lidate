<template>
    <form @submit.prevent="submit">
        <div class="form-group">
            <label for="">Nama Lengkap</label>
            <input type="text" v-model="name" class="form-control" :class="{'is-invalid': $v.name.$error}">
        </div>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" v-model="email" class="form-control" :class="{'is-invalid': $v.email.$error}">
        </div>

        <div class="form-group">
            <label for="">No Telepon</label>
            <input type="text" v-model="phone" class="form-control" :class="{'is-invalid': $v.phone.$error}">
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input type="password" v-model="password" class="form-control" :class="{'is-invalid': $v.password.$error}">
        </div>

        <div class="form-group">
            <button class="btn btn-primary btn-sm">Daftar</button>
        </div>

        
    </form>
</template>

<script>
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
import { notGmail, notPhone } from "../validator";
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(50)
        },
        email: {
            required,
            email,
            notGmail,
            maxLength: maxLength(50)
        },
        phone: {
            required,
            notPhone
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },
    methods: {
        submit() {
            this.$v.$touch(); // run validasi
            if(this.$v.$error) return // apabila error, maka stop
            alert('Form submitted') //apabila berhasil, tampilkan alert
        }
    }
}
</script>

