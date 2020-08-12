const initialState = {
  cartItems: [],
  showCart: false,
  subtotal: 0,
};

export default function cartReducer(state = initialState, action) {
  let newCart;
  switch (action.type) {
    case "ADD-ITEM-TO-CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            _id: action.item._id,
            quantity: 1,
            price: action.item.price,
            imageSrc: action.item.imageSrc,
            name: action.item.name,
          },
        ],
      };
    case "ADD-EXISTING-ITEM-TO-CART": // used for the catalog items AND the + button in cart item
      newCart = state.cartItems.map((item) => {
        if (action.item._id === item._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else return item;
      });
      return {
        ...state,
        cartItems: newCart,
      };
    case "REMOVE-ITEM-FROM-CART": // removes all quantities of the item
      newCart = state.cartItems.filter((item) => action.item._id !== item._id);
      return {
        ...state,
        cartItems: newCart,
      };
    case "DECREASE-ITEM-FROM-CART":
      newCart = state.cartItems.map((item) => {
        if (action.item._id === item._id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else return item;
      });
      return {
        ...state,
        cartItems: newCart,
      };
    case "UPDATE-QUANTITY-BY-INPUT-IN-CART":
      console.log(action.quantity);
      newCart = state.cartItems.map((item) => {
        if (action.item._id === item._id) {
          return {
            ...item,
            quantity: Number(action.quantity),
          };
        } else return item;
      });
      return {
        ...state,
        cartItems: newCart,
      };
    case "EMPTY-CART": // after purchase goes thru
      return {
        ...state,
        cartItems: [],
      };
    case "UPDATE-CART-SUBTOTAL": // called in cart/index
      return {
        ...state,
        subtotal: action.subtotal,
      };
    case "TOGGLE-CART-MODAL":
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
}
