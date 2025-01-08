
const { createSlice } = require("@reduxjs/toolkit");

const reduxSlicer = createSlice({
    name:'produk',
    initialState:{
        data:[], 
        ambildata:{},    
        isloading:false,
        error:null,
        
    },reducers:{       
        getprodukid:(state,action)=>{            
                const id = action.payload
                const init = state.data.find(item=>item.id === id)
                state.ambildata =init

        },
        pushdata :(state,action)=>{ 
            const newpost= action.payload
            state.data.push(newpost)
        },
    }
   
    })
     
    export const {getprodukid,pushdata} = reduxSlicer.actions;
    export default reduxSlicer.reducer;
 
