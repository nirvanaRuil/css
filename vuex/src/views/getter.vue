<template>
    <div>
        <h1>
            {{raver}}
        </h1>
        <h1>
            {{xin}}
        </h1>
        <h2>
            {{msg}}
        </h2>
        <h2>
            {{mixi}}
        </h2>
<!--        有多个数据会混合在computed里使用-->
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex'
    let getterData = mapGetters(['raver',"xin"])
    let stateData = mapState(['msg',"age"])

    export default {
        name: "getter",
        data(){
            return{

            }
        },
        // computed:{
        //     xin(){
        //         return this.state.xin
        //     },
        // },
        computed: {
            ...getterData,  //直接解构
            ...stateData,
            mixi(){
                return this.$store.getters.mixi('12425423')
            }
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>