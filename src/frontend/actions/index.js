import axios from 'axios';

export const onError = () => ({
    type: 'ERROR_REQUEST',
    });


export const registerUser = (payload, redirectUrl) => async (dispatch) => {
    try {
        const result = await axios.post(`/auth/sign-up`,payload);
        if(result.status == 201){
            window.location.href = redirectUrl;
        }else{
            dispatch(onError())
        }
    } catch (error) {
        console.log(error);
    }
    };