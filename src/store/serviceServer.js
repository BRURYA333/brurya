import axios from "axios";
import serviceStore from "./serviceStore";

export async function GetServices() {
    try {
        const response = await axios.get("http://localhost:8787/services");
        if (response.status === 200) {
            serviceStore.updateServices(response.data);
            alert('The services loaded successfully');
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

export async function AddServiceToserver(data) {
    try {
        
        const response = await axios.post("http://localhost:8787/service", data);
        if (response.status === 200) {
            serviceStore.updateService(response.data); // עדכן את המערך של השירותים בחנות
            alert('The new cake has been successfully added!');
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
