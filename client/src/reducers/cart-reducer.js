const initialState = {
    cartItems: null,
};

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case '':
            return {

            }
        default:
            return state;
    }
}