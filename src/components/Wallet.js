import React,{useState} from "react";

function Wallet ({setRemBalance}){
    const [money, setMoney] = useState (0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setRemBalance(curData=> curData + parseFloat(money))
    }

    return(
        <div className="wallet">
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Add Money</label>
                <input type="number"  id="amount" placeholder="insert amount here..." onChange={e=>setMoney(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Wallet;