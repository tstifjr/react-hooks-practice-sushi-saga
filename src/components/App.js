import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

//const API = "http://localhost:3001/sushis";

function App() {
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [remBalance, setRemBalance] = useState(100);

  return (
    <div className="app">
      <SushiContainer setEmptyPlates={setEmptyPlates} remBalance={remBalance} setRemBalance={setRemBalance}/>
      <Table plates={emptyPlates} remBalance={remBalance}/>
      <Wallet setRemBalance={setRemBalance}/>
    </div>
  );
}

export default App;
