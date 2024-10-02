import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

function App() {

  const [amount,setAmount] = useState(0);
  const count = useSelector((state)=>state.counter.value);

  const dispatch = useDispatch();


  function handleIncreamentClick(){
    dispatch(increment());
  }

  function handleDecreamentClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncreamentClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecreamentClick}>-</button>
      <p></p>
      <button onClick={handleResetClick}>Reset</button>
      <p></p>
      <input
        type='Number'
        value={amount}
        placeholder='Enter amount'
        onChange = {(e)=>setAmount(e.target.value)}
      />
      <p></p>
      <button onClick={handleIncAmountClick}>Update</button>
    </div>
  )
}

export default App
