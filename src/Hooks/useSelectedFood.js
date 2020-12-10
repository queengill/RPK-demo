import {useState} from 'react';

export function useSelectedFood(){
    const [selectedFood, setSelectedFood] = useState();
    return{
        selectedFood,
        setSelectedFood
    }
}
