<template>
    <div>
        {{add()}}
        <el-button @click="num++">让所有人的Num+1</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 10
            }
        },
        methods:{
            add(){
                this.$emit('info',this.num)              
            }
        }
    }
</script>

<style scoped>
  
</style>