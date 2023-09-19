'use server'

const getUserAuthenticated = async (userLogin) => {
let userAuth = {};

    Users.map((user) => {
    
        if (user.email === userLogin.email & user.senha === userLogin.password){
        userAuth = user
    }
})
return userAuth;
}

const getUsers = () =>{
        
}
export { getUsers, getUserAuthenticated };