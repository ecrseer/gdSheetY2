import axios from 'axios';

let secondURL= process.env.local_TO_HEROKU?process.env.local_TO_HEROKU
:"http://localhost:5000/arquivo";

let bsURL =  process.env.URLTEST?
    process.env.URLTEST :
    secondURL; 
   
 ;

let axconfig = { 
    baseURL:bsURL
}

const myDriver = axios.create(axconfig);

export default myDriver;