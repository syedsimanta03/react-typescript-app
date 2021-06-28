import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

const App = () => {

const dispatch = useDispatch()
const { depositMoney, withdrawtMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawtMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </>
  )
}

export default App
