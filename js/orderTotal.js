const createItem = (name, price) => {
    const privateAttribute = {
        name,
        price
    }

    const publicMethod = {
        getName: () => privateAttribute.name,
        getPrice: () => privateAttribute.price
    }

    return publicMethod
}

const orderTotal = order => {
    return order.items.reduce((prev, cur) => cur.getPrice() + prev, 0)
}