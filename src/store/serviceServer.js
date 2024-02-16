import axios from "axios";
import serviceStore from "./serviceStore";


export async function GetServices() {
    try {
        const response = await axios.get("http://localhost:8787/services");
        if (response.status === 200) {
            serviceStore.updateServices(response.data);
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
export async function AddServiceToserver(data) {
    try {
        const response = await axios.post("http://localhost:8787/service", data);
        if (response.status === 200) {
            serviceStore.updateService(data);
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
