import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMatxPrice(price: PriceBracket) {
    switch (price) {
        case PriceBracket.Low:
            return 10.0;
        case PriceBracket.Medium:
            return 20.0;
        case PriceBracket.High:
            return 30.0;
    }
}

/// Add your getOrders() function below:

function getOrders(price: PriceBracket, orders: Order[][]) {
    let filteredOrders: Order[][] = [];
    orders[0].filter((order: Order) => order.price <= getMatxPrice(price));

    orders.forEach((restaurant: Order[]) => {
        const result = restaurant.filter((order: Order) => order.price <= getMatxPrice(price));
        filteredOrders.push(result);
    })
    return filteredOrders;
}

/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
    restaurants.forEach((restaurant: Restaurant, index: number) => {
        if(orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach((order) => {
                console.log(`- ${order.name}: ${order.price}`);
            })
        }
    })
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
//console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders)

// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);

// Silver Rice Sushi 🍣
// - Gyoza and Rice: 7.99
// Nikko's Rotisserie Chicken 🍗
// - Chicken and Waffles: 9.99
// - Buffalo Wings Special: 8.99
// Lula Bagel 🥯
// - Turkey Bacon Bagel: 6.99
// - Lox Cream Cheese Bagel: 9.99
// - Pastrami Swiss Bagel: 7.99