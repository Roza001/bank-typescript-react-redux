import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "./state/action-creators/actionCreators";
import { State } from './state/reducers/combined';

function App() {

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  const [value, setValue] = useState<number>(0);

  const handleValChange = (e:ChangeEvent<HTMLInputElement>):void => {
    setValue(Number(e.target.value));
  }

  const click = (type:string):void => {
    switch(type){
      case "deposit":
        depositMoney(value);
        setValue(0);
        break;
      case "withdraw":
        withdrawMoney(value);
        setValue(0);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>{amount}</h1>
      <input  
        type="number"
        name="val"
        value={value}
        onChange={handleValChange}
      />
      <button onClick={() => click("deposit")}>Deposit</button>
      <button onClick={() => click("withdraw")}>Withdraw</button>
    </div>
  );
}

export default App;
