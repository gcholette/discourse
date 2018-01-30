const myCart = [
    { value: 23 },
    { value: 35 },
    { value: 4  }
]

const valuableItem = { value: 40 }

const cartValuables = (cart) => 
    cart.filter(item => item.value > 20)

const inspectCart = (cart) => 
    cartValuables(cart).length < 3  

function addValuable (cart) {
  if (inspectCart(cart)) {
    cart.push(valuableItem)
  }
  return cart
}

const initialCart = myCart

const rewardedCart = addValuable(myCart)

if (inspectCart(initialCart)) {
  console.log('free to go!')
} else {
  console.log('2 many value items?!')
}
