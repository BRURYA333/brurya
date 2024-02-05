import axios from "axios";
import dataStore from "..node_modules/dataStore";

export async function  ChekLogin(name, password){
    debugger;
    try{
        const isValid= await axios.post("http://localhost:8787/login",{name,password});
        if(isValid.status===200)
        {
            dataStore.setIsLogin(true);
        }
    }
        catch(e){
        if(e.response){
                alert('User name or password is not correct!');
        }
        else{
            alert('server failed');
        }
    }
    
}
