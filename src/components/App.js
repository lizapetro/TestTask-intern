import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/App.css';

import { actionFirstPage } from '../actions/firstPage';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';

export function App () {
  const { 
    currencies: 
    { 
      isLoading 
    }, 
    wallets, dataForDay, activeChart 
  } = useSelector(state => state);
   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFirstPage());
  }, []);

  if (isLoading) {
    return (<h1>Loading...</h1>);
  }

  return (
    <Router>
      <Route path='/' exact component={() => 
        <FirstPage wallets={wallets} dataForDay={dataForDay}/>} />
      <Route path='/wallet' exact component={() => 
        <SecondPage wallets={wallets} dataForDay={dataForDay} active={activeChart}/>}/>
    </Router>  
  );
}

