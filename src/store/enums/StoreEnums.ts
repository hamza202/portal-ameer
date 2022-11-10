enum Actions {
    // action typesv
    VERIFY_AUTH = 'verifyAuth',
    LOGIN = 'login',
    LOGOUT = 'logout',
    REGISTER = 'register',
    FORGOT_PASSWORD = 'forgotPassword',
    CHECK_USER = 'checkUser',
    GET_CART_ITEMS = 'getCartItems',
    DELETE_CART_ITEM = 'deleteCartItem'

}

enum Mutations {
    // mutation types
    PURGE_AUTH = 'logOut',
    SET_AUTH = 'setAuth',
    SET_USER = 'setUser',
    SET_PASSWORD = 'setPassword',
    SET_ERROR = 'setError',
    SET_CART_ITEMS = 'setCartItems',
    CHANGE_ITEM_DELETE_STATUS = 'changeItemDeleteStatus'
}

export { Actions, Mutations };
