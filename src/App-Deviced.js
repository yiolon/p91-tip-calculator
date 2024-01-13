import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [selectedPercentageFriend, setSelectedPercentageFriend] = useState(0); // Separate state for "friend"

  const you = "you";
  const friend = "friend";

  function handleReset() {
    setBill(0);
    setSelectedPercentage(0);
    setSelectedPercentageFriend(0);
  }

  function handleSetInput(event, setBill) {
    const inputValue = parseFloat(event.target.value);
    setBill(inputValue);
  }

  return (
    <div className="mainArea">
      <BillAmount
        handleSetInput={(event) => handleSetInput(event, setBill)}
        bill={bill}
      />
      <SelectPercentage
        person={you}
        setSelectedPercentage={setSelectedPercentage}
      />
      <SelectPercentage
        person={friend}
        setSelectedPercentage={setSelectedPercentageFriend}
      />
      <TotalPrice
        bill={bill}
        selectedPercentage={selectedPercentage}
        selectedPercentageFriend={selectedPercentageFriend}
      />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillAmount({ handleSetInput, bill }) {
  return (
    <div className="bill">
      <span>How much is the bill</span>
      <input
        onChange={handleSetInput}
        type="number"
        value={bill}
        inputMode="numeric"
      ></input>
    </div>
  );
}

function SelectPercentage({ person, setSelectedPercentage }) {
  const handleSelectChange = (event) => {
    const selectedPercentage = parseFloat(event.target.value);
    setSelectedPercentage(selectedPercentage);
  };

  return (
    <div className={person}>
      {person === "you" ? (
        <span>How did you like the service?</span>
      ) : (
        <span>How did your friend like the service?</span>
      )}

      <select onChange={handleSelectChange}>
        <option value="0"> Dissatisfied(0%)</option>
        <option value="5"> It was okay(5%)</option>
        <option value="10"> It was good(10%)</option>
        <option value="20"> Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function TotalPrice({ bill, selectedPercentage, selectedPercentageFriend }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tip =
      (bill * selectedPercentage + bill * selectedPercentageFriend) / 2 / 100;
    const totalBill = bill + tip;
    setTotal(totalBill);
  }, [bill, selectedPercentage, selectedPercentageFriend]);

  return (
    <div className="total">
      <h3>
        Your pay ${total.toFixed(2)} (${bill} + ${total.toFixed(2) - bill} tip){" "}
      </h3>
    </div>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>reset</button>;
}
