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

//定义scoped，使style只能在当前模块中使用
<style lang="sass" scoped>
$font-color: #66ccff;

#home{
    color: $font-color;
}
</style>