if(orderTotal({
    items: [
        createItem('Dragon food', 8),
        createItem('Dragon cage (small)', 800)
    ]
}) !== 808) {
    throw new Error('Check fail: Happy path')
}