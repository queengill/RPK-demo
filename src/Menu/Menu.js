import React from "react";
import styled from 'styled-components';
import {foodItems, priceFormat} from "../Data/FoodData";
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";

const MenuStyled = styled.div`
    height:1000px;
    margin:0px, 400px, 50px, 20px;
    padding:20px;
`

export function Menu({setSelectedFood}){
    return <MenuStyled>
        <h1>Menu</h1>
        <FoodGrid>
        {foodItems.map(foodItem =>(
            <Food img={foodItem.img} name={foodItem.name} onClick={()=> {
                setSelectedFood(foodItem);
            }
            }>
                <FoodLabel><div>{foodItem.name}</div>
                <div>{priceFormat(foodItem.price)}</div></FoodLabel>   
            </Food>
        ))}
        </FoodGrid>
        
    </MenuStyled>;
}