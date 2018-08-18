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

const orderTotal = (fetch, apikey, order) => {
    // sumOrderItems
    const sumOrderItems = order =>
        order.items.reduce((prev, cur) =>
            cur.getPrice() * cur.getQuantity() + prev, 0)

    if(order.country) {
        return fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
            headers: {
                apikey: apikey
            }
        })
        .then(response => response.json())
        .then(data => data.rates.standard.value)
        .then(vat => sumOrderItems(order) * (1 + vat/100))
    } else {
        return Promise.resolve(sumOrderItems(order))
    }
}

module.exports.createItem = createItem
module.exports.orderTotal = orderTotal