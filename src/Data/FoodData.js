export function priceFormat(price){
    return price.toLocaleString('en-us',{
        style:'currency',
        currency:'CAD'
    })
}
export const foodItems= [
    {
        name:'Veggie Pizza',
        img: '/img/veggie-pizza.jpeg',
        price:15
    },
    {
        name:'Cheese Pizza',
        img:'/img/cheesePizza.jpg',
        price: 10
    }
]