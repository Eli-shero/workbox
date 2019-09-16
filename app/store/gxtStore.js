// export default{
//     namespaced:true,
//     state:{
//         num:2
//     },
//     mutations:{
//        change(state,num){
//             state.num=num        
//        }
//     },
//     actions:{
//         changenum({commit},num){        
//             commit('change',num)          
//       }
//     }
// }

export default {
    namespaced:true,
    state:{
        num:2
    },
    mutations:{
        change(state,num){
            state.num=num
        }
    },
    actions:{
        changenum({commit},num){
            commit('change',num)
        }
    }
}
