// Basket actions
export const addToBasket = id => {
    return {
        type: "ADD",
        payload : {
            id
        }
    }
}
export const removeFromBasket = id => {
    return {
        type: "REMOVE",
        payload : {
            id
        }
    }
}

// Products actions
export const filterProductsByCategory = id => {}
export const filterProductsByKeyword = keyword => {}

export const userLoggedIn = (mail, mdp) => {}
export const userLoggedOut = id => {}
export const userSignIn = ({user}) => {}