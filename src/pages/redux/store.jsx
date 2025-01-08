import { configureStore } from "@reduxjs/toolkit";
import  slicereducer from '@/pages/redux/reduxSlicer'

const store = configureStore({
    reducer:{
        produk: slicereducer
    }
})
export default store;