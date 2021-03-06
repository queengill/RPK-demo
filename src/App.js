import React, {useState} from 'react';
import {GlobalStyle} from './Styles/GlobalStyle';
import {Navbar} from './Navbar/Navbar'
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {FoodDialog} from "./FoodDialog/FoodDialog";
import {Order} from "./Order/Order"
import {useSelectedFood} from "./Hooks/useSelectedFood";
import {useOrders} from "./Hooks/useOrders";

function App() {

  const selectedFood = useSelectedFood();
  const orders = useOrders();

  return (
    <>
    <GlobalStyle/>
    <FoodDialog {...selectedFood} {...orders}/>
    <Navbar/>
    <Order {...orders}/>
    <Banner/>
    <Menu {...selectedFood}/>
    </>
  );
}

export default App;
