import axios from 'axios';
const API = 'http://localhost:5050';

export const sendPhoneVerification = async(phone: any) => {
    try {
        console.log(phone)
        const res = await axios.post(`${API}/user/sendsms`, phone);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const SmsVerification = async(phone: any) => {
    try {
        console.log(phone)
        const res = await axios.post(`${API}/user/verify`, phone);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const signUp = async(userDetails: any) => {
    try {
        console.log(userDetails)
        const res = await axios.post(`${API}/user/signup`, userDetails);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const login = async(userDetails: any) => {
    try {
        console.log(userDetails)
        const res = await axios.post(`${API}/user/signin`, userDetails);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}

