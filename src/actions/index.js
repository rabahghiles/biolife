// Basket actions
export const addToBasket = product => {
    return {
        type: "ADD_PRODUCT",
        payload : {
            ...product,
        }
    }
}
export const removeFromBasket = id => {
    return {
        type: "REMOVE_PRODUCT",
        payload : {
            id
        }
    }
}

// Products actions
export const filterProductsByCategory = id => {}
export const filterProductsByKeyword = keyword => {}

// User actions
export const userLoggedIn = (mail, mdp) => {}
export const userLoggedOut = id => {}
export const userSignIn = ({user}) => {}