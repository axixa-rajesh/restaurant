import db from "../models/index.js"

const calculateOrderTotal = async (items, discount, tax) => { 
    let subtotal = 0;

    const updatedItems = items.map(item => {
        const linetotal = item.quantity * item.unit_price
        subtotal += linetotal;
        return{
            ...item,
            line_total: linetotal
        }
    })
    
    const discountAmount = (discount / 100) * subtotal;
    const taxAmount = (tax / 100) * (subtotal - discountAmount);
    const total = subtotal - discountAmount + taxAmount;  
    return {
        items: updatedItems,subtotal,discountAmount,taxAmount,total
    }
}

export default calculateOrderTotal;