
import { useState } from 'react'

const Header = () => {
    const [color,setColor]=useState("red");
    const [count,setCount]=useState(0);
  return (
    <div className="items-center">

      <h1 className="text-center font-bold text-pink-400">Different Colors {color}</h1>
     <button onClick={()=> setColor("Blue")} className="bg-red-300 font-bold ">Blue</button>
     <button onClick={()=> setColor("Green")}>Green</button>
     <button onClick={()=>setColor("White")}>White</button>
    <p>Count:{count}</p>
    <button onClick={() => setCount(count + 2)}>Increase</button>
    </div>
  )
}

export default Header
