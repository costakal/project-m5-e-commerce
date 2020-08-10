const initialState = {
    cartItems: [],
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD-ITEM-TO-CART':
            return {
                ...state,
                cartItems : [...state.cartItems, action.item]
            }
        default:
            return state;
    }
}