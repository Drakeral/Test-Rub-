import axios from "axios"
import { getTokenSourceMapRange } from "typescript"
import { IFormProps } from "../constants/weather.constants";

export const getWeatherInfo = async () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat=1.3521&lon=103.8198&appid=87b38d6022dcb4c543f0b025ea06e65b&units=metric#").then((res: any) => {
                resolve(res.data)
            }).catch((e) => {
                reject(e.response); 
            })
        } catch (err) {
            reject(err);
        };
    });
};

export const sendContactInfo = async (formValues: IFormProps) => {
    return new Promise((resolve, reject) => {
        try {
            axios.post("https://www.google.com", formValues).then((res: any) => {
                resolve('success')
            }).catch((e) => {
                reject("error"); 
            })
        } catch (err) {
            reject("error");
        };
    });
};