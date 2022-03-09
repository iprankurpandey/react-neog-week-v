import React from 'react';
import { useState } from 'react';

function OutofStockItem() {
  const [stock, setStock] = useState('stock');

  function StockList() {
    const items = [
      {
        itemName: 'Apple',
        Stock: true,
      },
      {
        itemName: 'banana',
        Stock: false,
      },
      {
        itemName: 'Cherry',
        Stock: false,
      },
    ];
    const style1 = {
      color: 'silver',
    };
    let outStock = items.filter((e) => e.Stock === false);
    let itemNameOutStock = outStock.map((q) => (
      <li style={style1}>{q.itemName}</li>
    ));
    setStock(itemNameOutStock);
  }

  return (
    <div>
      <h3>Items list :{stock}</h3>
      <button onClick={StockList}>get</button>
    </div>
  );
}

export default OutofStockItem;
