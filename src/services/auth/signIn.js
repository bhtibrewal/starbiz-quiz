import axios from "axios";

export const signIn = async ({
    setSigninError,
    data,
    userDataDispatch,
    
    setIsUserLoggedIn,
    showToast,
    keepMeLoggedIn
}) => {
    try {
        const res = await axios.post("/api/auth/login", data);
        if (res.status === 200) {
            const {
                data: {
                    foundUser: {
                        firstName, lastName, email, createdAt, cart, wishlist, addresses
                    },
                    encodedToken
                }
            } = res;
            userDataDispatch({
                type: "LOGIN_USER",
                payload: {
                    firstName, lastName, email, createdAt, cart, wishlist, addresses
                }
            })
            setIsUserLoggedIn(true);
            axios.defaults.headers.common["authorization"] = encodedToken;
            showToast({ title: 'logged in successfully', type: 'success' });
            if (keepMeLoggedIn) {
                localStorage.setItem("token", encodedToken);
                localStorage.setItem('user', JSON.stringify({
                    firstName, lastName, email, createdAt, addresses
                }))
            }
        }
    } catch (e) {
        setSigninError(e.response.data.errors);
    }
}