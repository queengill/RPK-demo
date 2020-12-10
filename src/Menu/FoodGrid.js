import styled from "styled-components";
import {Title} from "../Styles/title";

export const FoodGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:20px;
`
export const FoodLabel = styled(Title)`
    position:absolute;
    background-color:rgba(250,250,250, 0.70);
    padding:5px;
    font-weight:bold;
`
export const Food= styled.div`
    height:250px;
    padding:10px;
    font-size:20px;
    background-position:center;
    background-size:cover;
    border-radius:7px;
    filter:contrast(75%);
    box-shadow:0px 0px 10px 0px grey;
    background-image:${({img})=> `url(${img});`}
`