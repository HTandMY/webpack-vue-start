<template>
    <div id="home">
        Home
        <br/>
        {{ $store.state.data }}
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="sass">
$font-color: #66ccff;

#home{
    color: $font-color;
}
</style>