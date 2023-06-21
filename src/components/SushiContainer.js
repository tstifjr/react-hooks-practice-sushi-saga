import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ setEmptyPlates, remBalance, setRemBalance }) {
  const [sushiAll, setSushiAll] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(r => r.json())
      .then(data => setSushiAll(data));
  }, [])

  // const hasBeenEaten = sushiAll.filter(sushi=>sushi.eaten)
  // console.log(hasBeenEaten);

  const isEaten = (id, price) => {
    if (remBalance >= price) {
      setEmptyPlates((curData) => [...curData, []])
      setRemBalance((curData) => curData - price)

      //find id of sushi clicked ins sushi array, change object, reinsert obj to array
      const ix = sushiAll.findIndex(element => element.id === id);
      const findEl = sushiAll.find((element) => element.id === id)
      const copyEl = { ...findEl, eaten: true }
      setSushiAll((curData) => [...curData.slice(0, ix), copyEl, ...curData.slice(ix + 1)])
    }
    else alert("cannot buy")
  }

  const displayBin = sushiAll.filter((sushi, index) => index >= count && index < count + 4)

  const renderSushi = displayBin.map(sushi => <Sushi sushi={sushi} key={sushi.id} isEaten={isEaten} />)

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton setCount={setCount} />
    </div>
  );
}

export default SushiContainer;
