<template>
    <div>
        <h1>Main App Vue File</h1>
        <router-link :to="'/'">App</router-link>
        <br>
        <router-link :to="'/home'">Home</router-link>
        <!-- <br>
        <router-link :to="'/product/' + 7">7 id product detail</router-link> -->
        <br>
        <router-link :to="'/about'">About</router-link>
        <br>
        <router-link :to="{name: 'contact-route'}">Contact</router-link>
        <router-view>

        </router-view>
        <h1>
            Component
        </h1>
        <!-- <first-component/> -->
    </div>
</template>
<script>
export default {

}
</script>
<style>

</style>
