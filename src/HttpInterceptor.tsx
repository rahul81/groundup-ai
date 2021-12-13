import axios from 'axios';
import { LOGIN_USER } from './constants/Api';

export default function HttpInterceptor() {
    const BASE_URL = 'http://13.212.88.14:3000/api/v1'
    // For GET requests
    axios.interceptors.request.use(request => {
            // Add configurations here
            if(request.url?.indexOf(BASE_URL)==-1){
                request.url = BASE_URL + request.url
            }
            if(request.url?.indexOf(LOGIN_USER)==-1){
                request.headers = {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json'
                }
            }else{
                request.headers = {
                    'Content-Type': 'application/json'
                }
            }
            return request;
        },
        (err) => {
            return Promise.reject(err);
        }
    );
    
    // For POST requests
    axios.interceptors.response.use(request=> {
            // Add configurations here
            if (request.status === 201) {
                console.log('Posted Successfully');
            }
            return request;
        },
        (err) => {
            return Promise.reject(err);
        }
    );
    return (
        <>
        </>
    )
}
