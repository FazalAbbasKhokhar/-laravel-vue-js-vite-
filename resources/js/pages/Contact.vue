<template>
    <div>
        <!-- <h1>Contact Page {{ name }} {{ qty }}
            <button @click="changeNameValue('new user value')">click me to change the value of the name</button></h1> -->

            <!-- Input  data processing -->

            <!-- For Qty Update -->

            <!-- <input type="number" readonly v-model="qty" @input="checkQtyValue">
            <button @click="decrement" :disabled="qty == 1">-</button>
            <button @click="increment">+</button>

        <input type="text" v-model="name" @keypress="showAlert">

        {{ name }} -->

        <!-- <ExampleComponent/> -->


        <!-- Process for multiply price with qty and display the total amount in next input -->

        <div style="display:flex;align-items:center">
            <input type="text" v-model="price" @input="updateTotalAmount">
            <div style="display:flex;flex-direction:row;align-items:center">
                <input type="text" v-model="qty" @input="updateTotalAmount">
                <div style="display:flex;flex-direction:row;align-items:center">
                    <button @click="decrement" :disabled="qty == 1">-</button>
                    <button @click="increment">+</button>
                </div>
            </div>
            <input type="text" :readonly="price < 100" v-model="total_amount">
            <!-- <input type="text" readonly :value="price*qty"> -->
        </div>


    </div>
</template>
<script>
import ExampleComponent from '../components/ExampleComponent.vue';
export default {
    components: {
        ExampleComponent
    },
    data() {
        return {
            name: 'User',
            qty: 1,
            price: 2000,
            total_amount: null
        }
    },

    mounted() {
        // setTimeout(() => {
        //     this.name = 'User2';
        // }, 1000);
        // this.name = 'User';
    },

    methods: {
        changeNameValue(newvalue)
        {
            this.name = newvalue;
        },

        decrement()
        {
            this.qty--;
            this.updateTotalAmount();
        },

        increment()
        {
            this.qty++;
            this.updateTotalAmount();
        },

        showAlert()
        {
            alert("Input Value changed:" + this.name);
        },

        checkQtyValue()
        {
            if (this.qty <= 0) {
                this.qty = 1;
            }
        },

        updateTotalAmount()
        {
            console.log(this.price, this.qty);
            this.total_amount = this.price * this.qty;
        }
    },
}
</script>
<style>

</style>
