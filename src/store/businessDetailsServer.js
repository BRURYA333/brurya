import axios from "axios";
import AdminStore from "./AdminStore";


//server
export async function UpdateBusinessDetails(data) {
    try {
        const response = await axios.post("http://localhost:8787/businessData", data);
        if (response.status === 200) {
            AdminStore.UpdateBusinessDetails(response.data);
        }
    }
    catch (e) {
        if (e.response) {
            alert('User name or password is not correct!');
        }
        else {
            alert('server failed');
        }
    }
}

export async function GetBussinessDetails() {
    try {
        const response = await axios.get("http://localhost:8787/businessData");
        if (response.status === 200) {
            AdminStore.UpdateBusinessDetails(response.data);
            alert('Admin bussiness details loaded successfully');
        }
    }
    catch (e) {
        if (e.response) {
            alert('server failed');
        }
        else {
            alert('server failed');
        }
    }
}
