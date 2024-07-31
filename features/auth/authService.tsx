import axios from 'axios';
const API = 'http://localhost:5050';
export const sendPhoneVerification = async(phone: any) => {
    try {
        console.log(phone)
        const res = await axios.post(`${API}/user/verify`, phone);
        console.log(res)
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}