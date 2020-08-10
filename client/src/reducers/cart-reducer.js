const initialState = {
    cartItems: [],
    showCart: false
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD-ITEM-TO-CART':
            return {
                ...state,
                cartItems : [
                    ...state.cartItems, 
                    {   
                        _id: action.item._id,
                        quantity: 1,
                        price: action.item.price,
                        imageSrc: action.item.imageSrc,
                        name: action.item.name
                    }
                ]
            }
        case 'TOGGLE-CART-MODAL':
            return {
                ...state,
                showCart: !state.showCart
            }
        case 'ADD-EXISTING-ITEM-TO-CART':            
            return {
            }
        default:
            return state;
    }
}