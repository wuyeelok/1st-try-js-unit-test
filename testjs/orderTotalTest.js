// Test Case 3: Quatity
if(orderTotal({
    items: [
        createItem('Dragon candy', 2, 3)
    ]
}) !== 6) {
    throw new Error('Check fail: // Test Case 3: Quatity')
}

// Test Case 4: No Quantity Specified
if(orderTotal({
    items: [
        createItem('Dragon candy', 3)
    ]
}) !== 3) {
    throw new Error('Check fail: Test Case 4: No Quantity Specified')
}

//  Test Case 1
if(orderTotal({
    items: [
        createItem('Dragon food', 8, 1),
        createItem('Dragon cage (small)', 800, 1)
    ]
}) !== 808) {
    throw new Error('Check fail: Happy path Test Case 1')
}

//  Test Case 2
if(orderTotal({
    items: [
        createItem('Dragon collar', 20, 1),
        createItem('Dragon chew toy', 40, 1)
    ]
}) !== 60) {
    throw new Error('Check fail: Happy path Test Case 2')
}