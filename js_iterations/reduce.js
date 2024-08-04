const myNums = [1, 2, 3, 4, 5, 6];

const myTotal = myNums.reduce((acc, currValue)=>{
    console.log(`acc: ${acc} and currValue: ${currValue}`);
    return acc+currValue;
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>{
    return acc+item.price
}, 0)

console.log(priceToPay);

