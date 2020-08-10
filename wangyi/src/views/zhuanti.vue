<template>
    <div>
        <h1>主题</h1>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn";
    export default {
        name: "zhuanti",
        data(){
            return{
                active:0,
            }
        },
        components: {
            tabBtn,
        }
    }
</script>

<style >

</style>