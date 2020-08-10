export const requestAllItems = () => ({
    type: 'REQUEST-ALL-ITEMS'
});

export const receiveAllItems = (items) => ({
    type: 'RECEIVE-ALL-ITEMS',
    items: items
});

export const requestAllCompanies = () => ({
    type: 'REQUEST-ALL-COMPANIES'
});

export const receiveAllCompanies = (companies) => ({
    type: 'RECEIVE-ALL-COMPANIES',
    companies: companies
});

export const addItemToCart = (item) => ({
    type: 'ADD-ITEM-TO-CART',
    item: item
});

export const toggleCartModal = () => ({
    type: 'TOGGLE-CART-MODAL'
});