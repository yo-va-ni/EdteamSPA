const apiURL = "http://localhost:3000/api";
const apiRegister = `${apiURL}/v1/signup`;
const apiLogin = `${apiURL}/v1/signin`;
//const apiMessage = `${apiURL}`;

const prepareRegister = async () => {
    const user = {
        nickname: "pedro",
        password: "1234567",
    };
    const data = await executeService(apiRegister, "POST", user);
};

//prepareRegister();


const prepareLogin = async() => {
    const user = {
        nickname: "pedro",
        password: "1234567",
    };
    const data = await executeService(apiLogin, "POST", user);
    if (data.type === "ok") {
        localStorage.setItem("token", data.data);
        console.log("Token guardado");
    }
};

const executeService = async (uri, method, user) => {
    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    const options = {
        method: method,
        headers: myHeader,
        body: JSON.stringify(user),
    };

    const res = await fetch(uri, options);
    const data = await res.json();
    console.log(data);
    return data;
};

// prepareRegister();
prepareLogin();