const User = {
    users:{
        userId:"",
        password:"",
        userTypeDto:""
    },

isLoggedIn: false,

login(user){
    console.log(user);
    console.log(User.getLoggedIn());
    this.users.userId = user.userId;
    this.users.password = user.password;
    this.users.userTypeDto = user.userTypeDto;
    this.isLoggedIn = true;
    console.log(User.getLoggedIn());

},

logout(){
    this.isLoggedIn = false;
    this.users = {
        userId:"",
        password:"",
        userTypeDto:""
    }
},

getLoggedIn(){
     return this.isLoggedIn;
},



getUser(){
    return this.users;
}


}

export default User;