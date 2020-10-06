const router = require("express").Router();
const User = require("../models/User");
const helper = require("../helpers/helper");

const token = "ESTEESMITOKENQUEPASARCTMRTRANQUINMSQUEPASACAUSAGAA";


router.post("/api/v1/signin", (req, res) => {
    let message = {};
    let {nickname, password} = req.body;
    let userLogin = new User(nickname, password);

    if (!helper.login(userLogin)) {
        message.type = "error";
        message.message = `Usuario ${userLogin.nickname} o contrasenia incorrectos`;
        res.status(401).send(message);
    }
    message.type = "ok";
    message.message = `Bienvenido ${userLogin.nickname}`;
    message.data = token; // JWT
    res.status(201).send(message);

});

router.post("/api/v1/signup", (req, res) => {
    let message = {};
    const {nickname, password} = req.body;
    const newUser = new User(nickname, password);
    helper.users.forEach( user => {
        if (user.nickname === newUser.nickname) {
            message.type = "error";
            message.message = "Usuario ya registrado";
            res.status(400).send(message);
        }
    });
    helper.addUser(newUser);
    message.type = "ok";
    message.message = "Usuario registrado correctamente";
    res.status(201).send(message);
});

module.exports = router;