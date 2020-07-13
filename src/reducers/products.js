const categories = [
    {
        id: "oranges",
        category_name: "oranges",
        isActive: false,
        liste: [
            {
                id: "114f55g4g78",
                path: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
                name: "Oranges d'Espagne",
                price: 1.2,
                unity: "Kg"
            },
            {
                id: "114f500dfCCf",
                path: "https://images.unsplash.com/photo-1588444872849-1c9a5ade50ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
                name: "Oranges d'Espagne",
                price: 0.8,
                unity: "Kg"
            },
        ]
    },
    {
        id: "pommes",
        category_name: "pommes",
        isActive: false,
        liste: [
            {
                id: "114qs0d0qsLLg4g78",
                path: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
                name: "Pommes d'Espagne",
                price: 1.45,
                unity: "Kg"
            }
        ]
    },
    {
        id: "bananes",
        isActive: true,
        category_name: "bananes",
        liste: [
            {
                id: "114f55g40000000",
                path: "https://images.unsplash.com/photo-1528279335935-f486951a6adf?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
                name: "Bananes d'Espagne",
                price: 1.7,
                unity: "Kg"
            },
            {
                id: "114f5000sd078",
                path: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
                name: "Bananes de France",
                price: 1.05,
                unity: "Kg"
            },
            {
                id: "dflsdfkFFFg4500",
                path: "https://images.unsplash.com/photo-1589468619550-3c6350b50ce0?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80",
                name: "Bananes de Brésile",
                price: 2.8,
                unity: "Kg"
            }
        ]
    }
]

const productsReducer = ( state = categories, action) => {
    switch (action.type){
        case "FILTER_BY_CATEGORY":
            return "Filter products by category"
        case "FILTER_BY_KEYWORD":
            return "Filter products by keyword"
        default:
            return state
    }
}

export default productsReducer;