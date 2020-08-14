export const requestAllItems = () => ({
  type: "REQUEST-ALL-ITEMS",
});

export const receiveAllItems = (items) => ({
  type: "RECEIVE-ALL-ITEMS",
  items: items,
});

export const requestAllCompanies = () => ({
  type: "REQUEST-ALL-COMPANIES",
});

export const receiveAllCompanies = (companies) => ({
  type: "RECEIVE-ALL-COMPANIES",
  companies: companies,
});

export const requestAllCategories = () => ({
  type: "REQUEST-ALL-CATEGORIES",
});

export const receiveAllCategories = (categories) => ({
  type: "RECEIVE-ALL-CATEGORIES",
  categories: categories,
});

export const requestCategory = () => ({
  type: "REQUEST-CATEGORY",
});

export const receiveCategory = (category) => ({
  type: "RECEIVE-CATEGORY",
  category: category,
});

export const addItemToCart = (item) => ({
  type: "ADD-ITEM-TO-CART",
  item: item,
});

export const addExistingItemToCart = (item) => ({
  type: "ADD-EXISTING-ITEM-TO-CART",
  item: item,
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE-ITEM-FROM-CART",
  item: item,
});

export const decreaseItemFromCart = (item) => ({
  type: "DECREASE-ITEM-FROM-CART",
  item: item,
});

export const updateQuantityByInputInCart = (item, quantity) => ({
  type: "UPDATE-QUANTITY-BY-INPUT-IN-CART",
  item: item,
  quantity: quantity,
});

export const emptyCart = () => ({
  type: "EMPTY-CART",
});

export const updateCartSubtotal = (subtotal) => ({
  type: "UPDATE-CART-SUBTOTAL",
  subtotal: subtotal,
});

export const toggleCartModal = () => ({
  type: "TOGGLE-CART-MODAL",
});

export const missingStockItems = (items) => ({
  type: "MISSING-STOCK-ITEMS",
  items: items,
});

export const error404 = (errorMessage) => ({
  type: "ERROR-404",
  error: errorMessage,
});
