

function calculateOrderTotal(items=[], taxRate=0, discount=0) {
const line_items = items.map(item =>({  
    ...items,
    line_totals: item.price * item.quantity}));


}
