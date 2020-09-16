import React, { useState } from "react";

function RefineByPrices(props) {
  const { handleByPrices, valueByPricesStart, valueByPricesEnd } = props;

  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const itemPrices = [];
  const prices = ["", 1, 80, 160, 240, 1820, 3400, 4980, ""];

  for (var i = 0; i < prices.length - 1; i++) {
    let item = {
      id: i + 1,
      start: prices[i],
      end: prices[i + 1],
    };
    itemPrices.push(item);
  }

  const onClick = (start, end) => {
    handleByPrices(start, end);
  };

  return (
    <div className="refine-by-prices">
      <ul>
        {itemPrices.map((e, i) => {
          if (e.start === "") {
            return (
              <li
                key={i}
                onClick={() => onClick(e.start, e.end, e.id)}
                className={valueByPricesEnd === e.end ? "active" : ""}
              >
                ≤{e.end}
              </li>
            );
          } else if (e.end === "") {
            return (
              <li
                key={i}
                onClick={() => onClick(e.start, e.end, e.id)}
                className={valueByPricesStart === e.start ? "active" : ""}
              >
                ≥{e.start}
              </li>
            );
          } else {
            return (
              <li
                key={i}
                onClick={() => onClick(e.start, e.end, e.id)}
                className={valueByPricesStart === e.start ? "active" : ""}
              >
                ${e.start} - {e.end}
              </li>
            );
          }
        })}
      </ul>
      <form
        onSubmit={(e) => {
          onClick(startInput, endInput);
          e.preventDefault();
        }}
      >
        <label>
          <span>$</span>
          <input
            type="number"
            value={startInput}
            onChange={(value) => setStartInput(value.target.value)}
          />
        </label>
        <span></span>
        <label>
          <span>to $</span>
          <input
            type="number"
            value={endInput}
            onChange={(value) => setEndInput(value.target.value)}
          />
        </label>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default RefineByPrices;
