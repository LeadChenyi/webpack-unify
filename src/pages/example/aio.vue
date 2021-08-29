<template>
    <div class="index-page">
        <div class="h1">18 point font</div>
        <div class="h2">16 point font</div>
        <div class="h3">15 point font</div>
        <div class="h4">12 point font</div>
        <div class="h5">10 point font</div>
        <div class="square"></div>
        <div class="mobile-square"></div>
        <br />
        <!-- postcss-pxtorem不支持转换行内样式、动态加载样式 -->
        <div
            style="width: 200px; height: 200px; background-color: #ff0000"
        ></div>
        <div class="pc-square"></div>
    </div>
</template>

<script>
export default {
    name: "Aio",
};
</script>

<style>
.h1 {
    display: flex;
    font-size: 36px;
}
.h2 {
    display: flex;
    font-size: 32px;
}
.h3 {
    display: flex;
    font-size: 15px;
}
.h4 {
    display: flex;
    font-size: 12px;
}
.h5 {
    display: flex;
    font-size: 10px;
}
.square {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 132, 255);
}
</style>