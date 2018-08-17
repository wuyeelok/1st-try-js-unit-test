const createItem = (name, price, quantity=1) => {
    const privateAttribute = {
        name,
        price,
        quantity
    }

    const publicMethod = {
        getName: () => privateAttribute.name,
        getPrice: () => privateAttribute.price,
        getQuantity: () => privateAttribute.quantity
    }

    return publicMethod
}

const orderTotal = (fetch, order) => {
    fetch('https://vatapi.com/v1/country-code-check?code=' + order.country)
    return Promise.resolve(
     order.items.reduce((prev, cur) => cur.getPrice() * cur.getQuantity() + prev, 0)
    )
}

module.exports.createItem = createItem
module.exports.orderTotal = orderTotal