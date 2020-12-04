import axios from 'axios';

let bsURL =  process.env.MY_SHEET?
    process.env.MY_SHEET :
    "http://localhost:5000/arquivo"; 
   
 ;

let axconfig = { 
    baseURL:bsURL
}

const myDriver = axios.create(axconfig);

export default myDriver;