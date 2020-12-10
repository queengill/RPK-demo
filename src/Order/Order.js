import React from "react";
import styled from 'styled-components';
import {DialogContent, DialogFooter, Button} from "../FoodDialog/FoodDialog";
import {priceFormat} from "../Data/FoodData";


const OrderedStyled = styled.div `
    position: fixed;
    right:0px;
    top:90px;
    width:340px;
    background-color:white;
    height:90%;
    z-index:10;
    box-shadow:4px 0px 5px 4px grey;
    display: flex;
    flex-direction: column;
`

const OrderContent = styled(DialogContent)`
    padding:20px;
    height: 100%;
`;
const OrderItem = styled.div`
    padding:10px 0px;
    display:grid;
`;
export function Order({orders}){
    return <OrderedStyled>
        {orders.length===0? (<OrderContent>Your order looks empty</OrderContent>) : 
        <OrderContent>Your Order:
            {orders.map(order =>(
                <OrderItem>
                    <span>1.</span>
                    <span>{order.name}</span>  
                    <span>{priceFormat(order.price)}</span>
                </OrderItem>   
            ))}
        </OrderContent>}
        <DialogFooter>
            <Button>Place Order</Button>
        </DialogFooter>
    </OrderedStyled>
}