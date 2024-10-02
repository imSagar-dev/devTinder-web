import axios from "axios";
import { constants } from "../config/constants";


export  async function httpPost(url,data){
    try {
        const response = await axios.post(constants.url+url,data ,{withCredentials:true});
       
       
        return response.data;
    } catch (error) {
        // console.log(JSON.stringify(error));
        return error.response.data;
    }
}

export  async function httpGet(url){
    try {
        const response = await axios.get(constants.url+url,{withCredentials:true});
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}


export  async function httpPatch(url,data){
    try {
        const response = await axios.patch(constants.url+url,data ,{withCredentials:true});
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export  async function httpDelete(url){
    try {
        const response = await axios.delete(constants.url+url,{withCredentials:true});
        return response;
    } catch (error) {
        return error.response.data;
    }
}