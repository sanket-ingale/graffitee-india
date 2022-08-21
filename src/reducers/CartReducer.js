const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.id)
        case "REMOVE_ALL":
            return [];
        case "ADD_ONE":
            return state.map(item => item.id === action.id ? {...item, cartQty: item.cartQty + 1} : item)
        case "REMOVE_ONE":
            return action.cartQty > 1 ?
             state.map(item => item.id === action.id ? {...item, cartQty: item.cartQty - 1} : item) :
             state.filter(item => item.id !== action.id)
        default:
            return state;
    }
};

export default cartReducer;