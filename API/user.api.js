const getUserData = () => {
    return fetch("http://localhost:8090/user").then((response) =>
        response.json()
    );
};

const createUser = async (data) => {
    try {
        const response = await fetch("http://localhost:8090/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

const Loginuser = async (data) => {
    try {
        const response = await fetch("http://localhost:8090/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let res = await response.json();
        console.log(res);
    } catch (error) {
        console.log("Error:", error);
    }
};

export { createUser, getUserData, Loginuser };