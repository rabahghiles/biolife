const panier = [
    {
        id: "114f5000sd078",
        path: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        name: "Bananes de France",
        price: 1.05,
        unity: "Kg(s)",
        quantity: 6,
    },
    {
        id: "114f500dfCCf",
        path: "https://images.unsplash.com/photo-1588444872849-1c9a5ade50ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
        name: "Oranges d'Espagne",
        price: 0.8,
        unity: "Kg(s)",
        quantity: 5
    },
    {
        id: "114f55g40000000",
        path: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
        name: "Bananes d'Espagne",
        price: 1.7,
        unity: "Kg",
        quantity: 9
    },
]

const basketReducer = ( state = panier, action) => {
    switch (action.type){
        case "ADD":
            return state;

        case "REMOVE":
            return state;

        default:
            return state
    }
}

export default basketReducer;