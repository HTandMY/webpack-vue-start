<template>
    <div>
        <div>{{ message }}</div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "helloWorld"
        }
    },
}
</script>

<style>

</style>