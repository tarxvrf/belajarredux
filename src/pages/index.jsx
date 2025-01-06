import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { getambildata,getambildataid} from "./redux/slicerData";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const index=()=> {
  const { pelajar,pemain,loading,error} = useSelector((state) => state.siswa);  
  const dispatch = useDispatch();
  const [state,setdata]=useState('')

  useEffect(() => {
    dispatch(getambildata());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getambildataid(136))        
  },[dispatch])

  const handledata= (e)=>{
    e.preventDefault()
    setdata(pemain.name)
  }
  
  
  if(loading) return <div>Loading ....</div>
  if(error) return <div>Error ....</div>

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div>hello</div>
      <form>
        <div className="grid w-full items-center gap-4">
          <div>
            <Label>
              {pelajar.map((item,index)=>
              <li key={index}>no {item.id} nama {item.name} dan umur {item.age}</li>
              )}
            </Label>
            <div>
              <label>ambil single data no {pemain.id} nama {pemain.name} dan umur {pemain.age} </label>
            </div>

            <div>
              <input className= " text-white border bg-black"type="text" placeholder="masukan nama" onChange={e=>setdata(e.target.value)} value={state} />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Button onClick={handledata}></Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default index;
