import React from 'react';
import styled from 'styled-components';
import {FoodLabel} from "../Menu/FoodGrid";
import {brandRed} from "../Styles/colors";
import {Title} from "../Styles/title";
import {priceFormat} from "../Data/FoodData";


const Dialog = styled.div`
   width:500px;
   background-color:white;
   position:fixed;
   top:75px;
   z-index:5; 
   max-height: calc(100% - 100px);
   left: calc(50% - 250px);
   diplay:flex;
   flex-direction:column;
`
const DialogShadow = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    top:0px;
    background-color:black;
    opacity:0.7;
    z-index:4;
`
const DialogHeader = styled.div`
    min-height:200px;
    background-position:center;
    background-size:cover;
    margin-bottom:20px;
    ${({img}) => `background-image:url(${img});`}
`;
const DialogHeaderName = styled(FoodLabel)`
    font-size:30px;
    padding:5px;
    margin:10px;
`;
export const DialogContent = styled.div`
    overflow:auto;
    min-height:100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;
export const DialogFooter = styled.div`
    height:60px;
    box-shadow: 0px -2px 20px 0px grey;
    display: flex;
    justify-content: center;
`;

export const Button = styled(Title)`
    margin:10px;
    color:white;
    height:20px;
    width:200px;
    padding:10px;
    text-align: center;
    border-radius:5px;
    cursor:pointer;
    background-color:${brandRed};
`

export function FoodDialog({selectedFood, setSelectedFood, orders, setOrders}){
    function close(){
        setSelectedFood();
    }
    if(!selectedFood) return null;

    const order={
        ...selectedFood
    }
    function addToOrder(){
       setOrders([...orders, order]);
       close();     
    }
    return (
        <>
        <DialogShadow onClick={close}></DialogShadow>
        <Dialog>
            <DialogHeader img={selectedFood.img}>
            <DialogHeaderName>{selectedFood.name}</DialogHeaderName>
            </DialogHeader>
            <DialogContent/>
            <DialogFooter><Button onClick={addToOrder}>Add to Order: {priceFormat(selectedFood.price)}</Button></DialogFooter>         
        </Dialog>
    </>
    );
}