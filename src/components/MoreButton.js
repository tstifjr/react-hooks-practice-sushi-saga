import React from "react";

function MoreButton({setCount}) {
  return <button onClick={()=>setCount(cur=>{
    if (cur === 96) return 0
    else return cur+4
  })}>More sushi!</button>;
}

export default MoreButton;
