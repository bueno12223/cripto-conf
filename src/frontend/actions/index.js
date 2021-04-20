export const onSubmit = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
    });

export const registerUser = (payload, redirectUrl) => async (dispatch) => {
    try {
        const { data } = await axios.post('/auth/sign-up', payload);
        dispatch(registerRequest(data));
        window.location.href = redirectUrl;
    } catch (error) {
        console.log(error);
    }
    };