const USER_LOGIN = 'USER_LOGIN'

const initialState = {
    username: 'admin',
    password: 'deveducation',
    email: 'admin@deveducation.com',
    usernameInput: '',
    passwordInput: '',
    colorText: 'black',
    colorPass: 'black',
    isLogged: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLogged: action.value
            }
        default:
            return state
    }
}
