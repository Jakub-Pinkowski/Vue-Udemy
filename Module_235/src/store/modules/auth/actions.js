export default {
    login() {},
    async signup(context, payload) {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAq7pkY3HLEuQgEi9CffMfeCfN0P9uVzE0',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            }
        );
        console.log(response);

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(
                responseData.message ||
                    'Failed to authenticate. Check your login data.'
            );
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
};
