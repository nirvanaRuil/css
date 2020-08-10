<template>
    <div>
        <h1>增删改案例</h1>

    </div>
</template>

<script>
    export default {
        name: "demo4",
        data(){
            return{

            }
        },
        methods:{
            deleteUser(){  //用户删除
                if (window.confirm("是否确定删除?")){
                    this.userList.splice(index,1)
                }
            },
            editUser(){  //点击修改让修改弹窗跳出来
                this.isShow = true
            },
            add(){
                this.isShow = true
                
            }
        }
    }
</script>

<style scoped>

</style>