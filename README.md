## Getting Started
Kunjungi website React-Redux dan Redux-toolkit https://redux-toolkit.js.org/

## Instalasi
```bash
npm install @reduxjs/toolkit
npm install react-redux
```

## Konfigurasi
#1.BUAT FILE store.jsx
```bash
import { configureStore } from "@reduxjs/toolkit";
import  slicereducer from '@/pages/redux/reduxSlicer'

const store = configureStore({
    reducer:{
        produk: slicereducer
    }
})
export default store;
```
#2.Parrsing store ke _app.js
```bash
import store from "@/pages/redux/store"
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return <Provider store={store}>  <Component {...pageProps} /></Provider>
}
```
#3. BUAT FILE reduxSlicer.jsx
```bash
import { createSlice } from "@reduxjs/toolkit";
const reduxSlicer = createSlice({
  name: "produk",
  initialState: {
    data: [],
    ambildata: {},
    isloading: false,
    error: null,
  },
  reducers: {
    getprodukid: (state, action) => {
      const id = action.payload;
      const init = state.data.find((item) => item.id === id);
      state.ambildata = init;
    },
    pushdata: (state, action) => {
      const newpost = action.payload;
      state.data.push(newpost);
    },
  },
});
export const { getprodukid, pushdata } = reduxSlicer.actions;
export default reduxSlicer.reducer;

```

## PENGGUNAAN di file index.jsx
import properti dan fungsi

```bash
import {  use, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduk,getprodukid,pushdata} from '@/pages/redux/reduxSlicer';
```

untuk post data ke Array
```bash
const klik2=()=>{
  const newpost = {id:state,nama:input2}
  dispatch(pushdata(newpost))
  }

```

untuk getdata berdasar id
```bash
const klik =(e)=>{
  dispatch(getprodukid(state))
  }
```

Component input dan buton
```bash
      <input
          className="border bg-transparent"
          type="text"
          value={state}
          name="input"
          onChange={(e) => setstate(e.target.value)}
        />
        <input
          className="border bg-transparent"
          type="text"
          value={input2}
          name="input2"
          onChange={(e) => setinput2(e.target.value)}
        />

        <button onClick={() => klik()}>klik</button>
        <button onClick={() => klik2()}>klik</button>
```


## Learn More

Pembuatannya menggunakan NextJs 

kalian bisa kunjungi websitenya 

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.
  [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

 [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
