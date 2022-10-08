enum Actions {
    // action typesv
    VERIFY_AUTH = 'verifyAuth',
    LOGIN = 'login',
    LOGOUT = 'logout',
    REGISTER = 'register',
    FORGOT_PASSWORD = 'forgotPassword',

}

enum Mutations {
    // mutation types
    PURGE_AUTH = 'logOut',
    SET_AUTH = 'setAuth',
    SET_USER = 'setUser',
    SET_PASSWORD = 'setPassword',
    SET_ERROR = 'setError',
}

export { Actions, Mutations };
