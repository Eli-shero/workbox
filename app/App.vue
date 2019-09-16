<template>
    <div>
        <Zi @info='obj'/>
        <p>原先是0我接收了子组件的num 所以我的number是:{{number}}</p>
        <p>我是父组件，开始是2拿到了vuex的Num：{{$store.state.gxtStore.num}}</p>

    </div>
</template>

<script>
import Zi from './Zi.vue'
    export default {
        components:{
            Zi,
        },
        data() {
            return {
                number: 0
            }
        },
        methods:{
            obj(num){
               this.number=num
               this.$store.dispatch('gxtStore/changenum',num)                           
            }
        }
        
        
    }
</script>

<style scoped>
  p{
        border: 1px solid black;
        width: 200px;

    }
</style>