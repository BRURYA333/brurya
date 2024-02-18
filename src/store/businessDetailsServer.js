import AdminStore from "./AdminStore";


//server
export async function UpdateBusinessDetails() {
    try {
        const response = await axios.post("http://localhost:8787/admin");
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
