<template>
    <div>
        <h1>Contact Page {{ name }} {{ qty }}
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <button @click="changeNameValue('new user value')">click me to change the value of the name</button></h1>
        <ExampleComponent/>
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
        },

        increment()
        {
            this.qty++;
        },
    },
}
</script>
<style>

</style>
