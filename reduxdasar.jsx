import style from "@/styles/style.module.css";

import {  use, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduk,getprodukid,pushdata} from '@/pages/redux/reduxSlicer';

export default function Home() {
const {data,ambildata,error} = useSelector((state)=>state.produk)
const dispatch = useDispatch()
const [state,setstate]=useState('')
const [input2,setinput2]=useState('')


const klik2=()=>{
  const newpost = {id:state,nama:input2}
  dispatch(pushdata(newpost))
  }

//seEffect(()=>{
  //dispatch(getProduk([{id:3,nama:'susu'}]))
//},[dispatch])

const klik =(e)=>{
  dispatch(getprodukid(state))
  
}
if(error) return <div>error</div>

  return(
    <div className={style.container}>
      
      {data.map((item,index)=>
        <li key={index}>{item.id} {item.nama}</li>
      )}
      <div>
      <div>{ambildata.id} {ambildata.nama}</div>
      </div>
      <div className="flex flex-col gap-3">
        <input className="border bg-transparent" type="text" value={state} name="input" onChange={(e)=>setstate(e.target.value)} />
        <input className="border bg-transparent" type="text" value={input2} name="input2" onChange={(e)=>setinput2(e.target.value)} />
              
        <button onClick={()=>klik()}>klik</button>
        <button onClick={()=>klik2()}>klik</button>
        </div>
    </div>

  )
}
