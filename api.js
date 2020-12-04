import axios from 'axios';

let bsURL =  process.env.URLTEST?
    process.env.URLTEST :
    "http://localhost:5000/arquivo"; 
   
 ;

let axconfig = { 
    baseURL:bsURL
}

const myDriver = axios.create(axconfig);

export default myDriver;