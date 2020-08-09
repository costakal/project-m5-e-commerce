export const requestAllItems = () => ({
    type: 'REQUEST-ALL-ITEMS'
});

export const receiveAllItems = (items) => ({
    type: 'RECEIVE-ALL-ITEMS',
    items: items
});