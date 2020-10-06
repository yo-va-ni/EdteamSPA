
let users = [];

const addUser = (userObject) => {
    users.push(userObject);
};

const login = (userLogin) => {
    for (const user of users) {
        if (user.nickname === userLogin.nickname && user.password === userLogin.password){
            return true
        }
        return false
    }
}

module.exports.users = users;
module.exports.addUser = addUser;
module.exports.login = login;