<template>
    <div>
        <h1>shopping</h1>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn";
    export default {
        name: "shopping",
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