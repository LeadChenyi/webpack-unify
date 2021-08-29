<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>
<style src="@/assets/style/mobile/index.css"></style>
<style src="@/assets/style/pc/index.css"></style>
<style>
/* postcss-pxtorem不支持转换行内样式、动态加载样式 */
/* @import "@/assets/style/pc/index.css"; */
</style>