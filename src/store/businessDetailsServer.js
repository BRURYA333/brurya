import AdminStore from "./AdminStore";

export async function UpdateBusinessDetails(data) {
    try {
        const response = await axios.post("http://localhost:8787", data);
        if (response.status === 200) {
            AdminStore.updateService(data);
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
