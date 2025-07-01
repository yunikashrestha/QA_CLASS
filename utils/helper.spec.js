// const axios=require('axios');
// import { expect} from '@playwright/test';
// const cookie=require('cookie');

// let apiUrl

// async function authenticateUser(username,password,{request}){
//     const apiUrl=await getApiBaseUrl();
//     const headers={
//         'Content-Type':'application/json',
//     };
//     const requestBody={
//         email:username,
//         password:password,
//     };
//     const response=await request.post(`${apiUrl}/users/login`,{
//         data:requestBody,
//         headers,
//     });

//     expect(response.status()).toBe(200);
//     const responseBody=await response.json();
//     const token=responseBody.token;
//     return token;

//     async function createEntity(userData,accessToken,module,{request}){
//     const apiUrl=await getApiBaseUrl();
//     const headers={
//         'Content-type':'application.json',
//         'Accept':'application/json',
//         'authorization':"Gearer"+accessToken,
//     };
//     const response=await request.post(apiUrl+module,{
//         headers,
//         data:JSON.stringify(userData),
//     });

//     const responseBody=await response.json();
//     const statusCode=response.status();
//     expect(statusCode).toBe(200);
//     if(responseBody && responseBody.id){
//         return responseBody.id;
//     }
//     else{
//         return null;
//     }
// }

// }
// aasync function getEntity(accessToken, module, status,{request}){
//     const apiUrl = await getApiBaseUrl();
//     const headers ={
//         'Content-Type':'application/json',
//         'Accept':'application/json',
//         'authorization':"Bearer" +accessToken,
//     };
//     const response = await request.get(apiUrl + module,{
//         headers,
//         data: JSON.stringify(userData),
//     });
    
//     const responseBody = await response.json();
//     const statusCode = response.status();
//     expect(statusCode).toBe(201);
//     if(responseBody && responseBody.id){
//         return responseBody.id;
//     }
//     else{
//         return null;
//     }
 
// }
// async function deleteEntity(accessToken,module,{request}){
//     const apiUrl=await getApiBaseUrl();
//     const headers={ 'Content-type':'application.json',
//         'Accept':'application/json',
//         'authorization':"Gearer"+accessToken,
//     };
//     const response=await request.delete(apiUrl+module,{
//         headers,
        
//     });

// }
// async function getCurrentDateTimeStamp(){
//     const now=new Date();
//     const year=now.getFullYear();
//     const month=(now.getMonth()+1).toString().padStart(2,'0');//Adding 1 to month since it is 0 Indexed
//     const day=now.getDate().toString().padStart(2,'0');
//     const hours=now.getHours().toString().padStart(2,'0');
//     const minutes=now.getMinutes().toString.padStart(2,'0');
//     const seconds=now.getSeconds().toString.padStart(2,'0');
//     return `$(year)-$(month)-$(day)-$(hours)-$(minutes)-(seconds)`;
// }

// const statusCode=response.status();
//     expect(statusCode).toBe(parseInt(status));
//     if(responseBody && responseBody[0].id){
//         return responseBody[0].id;
//     }
//     else{
//         return null;
//     }

//   module.exports={authenticateUser,createEntity,getCurrentDateTimeStamp}  

const axios = require('axios');
import {expect} from '@playwright/test';
// const cookie = require('cookie');

let apiUrl
async function authenticateUser(username,password,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type':'application/json',
    };
    const requestBody ={
        email: username,
        password: password,
    };
    const response = await request.post(`${apiUrl}/users/login`,{
        data:requestBody,
        headers,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const token = responseBody.token;
    return token;
}
async function getApiBaseUrl(params) {
    apiUrl = process.env.API_BASE_URL;
    if(!apiUrl){
        apiUrl = "https://thinking-tester-contact-list.herokuapp.com"
    }
    return apiUrl;
    
}
async function createEntity(userData, accessToken, module ,{request}) {
    const apiUrl= await getApiBaseUrl();
    const headers ={
        "Content-Type":'application/json',
        "Accept":'application/json',
        "authorization": "Bearer " + accessToken,
    };
    console.log(userData);
    const response = await request.post(apiUrl + module, {
        headers,
        data: userData,
    });
    const responseBody = await response.json();
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    if (responseBody && responseBody.id) {
        return responseBody.id
    }
    else{
        return null;
    }
    
}

async function getEntity(accessToken, module, status,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type':'application/json',
        'Accept':'application/json',
        'authorization':"Bearer" + accessToken,
    };
    const response = await request.get(apiUrl + module,{
        headers,
        data: JSON.stringify(userData),
    });
    
    const responseBody = await response.json();
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    if(responseBody && responseBody.id){
        return responseBody.id;
    }
    else{
        return null;
    }
 
}
async function validateEntity (accessToken, module, status, {request}){
    const apiUrl = await getApiBaseUrl();
    const headers = {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'authorization':"Bearer"+accessToken,
    };
    const response = await request.get(apiUrl+module,{
        headers,
    });
    const statusCode = response.status();
    expect(statusCode).toBe(parseInt(status));
}

async function deleteEntity(accessToken, module, {request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'authorization':"Bearer" +accessToken,
    };
    const response = await request.delete(apiUrl + module,{
        headers,
    });
    const statusCode = response.status();
    expect(statusCode).toBe(200);
}
async function getCurrentDateTimeStamp(){
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth()+1).toString().padStart(2,'0');//Adding 1 to month
    const day = now.getDate().toString().padStart(2,'0');
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    return '${year} -${month}-${day}_${hours}-${minutes}-${seconds}';
}
   module.exports = {authenticateUser,createEntity,getEntity,getCurrentDateTimeStamp};