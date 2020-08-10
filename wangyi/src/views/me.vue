<template>
    <div>
        <h2>我的</h2>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn";
    export default {
        name: "me",
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