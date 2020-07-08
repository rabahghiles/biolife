const loginReducer = ( state = false, action) => {
    switch (action.type){
        case "SIGN_IN":
            return "Client signed";
        case "LOG_IN":
            return "Client logged in";
        case "LOG_OUT":
            return "Client logged out";
        default:
            return state
    }
}

export default loginReducer;