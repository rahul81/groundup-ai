import React from 'react'
import axios from 'axios';

export default function HttpInterceptor() {
    const BASE_URL = 'http://13.212.88.14:3000/api/v1'
    // For GET requests
    axios.interceptors.request.use(request => {
            // Add configurations here
            if(request.url?.indexOf(BASE_URL)==-1){
                request.url = BASE_URL + request.url
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
