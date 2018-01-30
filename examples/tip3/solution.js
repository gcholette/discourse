function addValuable (cart) {
    if (inspectCart(cart)) {
      return [...cart, valuableItem]
    }
    return cart
}