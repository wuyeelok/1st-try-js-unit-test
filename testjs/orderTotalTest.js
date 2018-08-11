// Test Case #1
if(orderTotal({
    items: [
        createItem('Dragon food', 8),
        createItem('Dragon cage (small)', 800)
    ]
}) !== 808) {
    throw new Error('Check fail: Happy path #1')
}

// Test Case #2
if(orderTotal({
    items: [
        createItem('Dragon collar', 20),
        createItem('Dragon chew toy', 40)
    ]
}) !== 60) {
    throw new Error('Check fail: Happy path #2')
}