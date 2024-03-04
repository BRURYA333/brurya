import axios from "axios";
import MeetingStore from "./MeetingStore";


export async function setMeetings() {
    try {
        const response = await axios.get("http://localhost:8787/appointments");
        if (response.status === 200) {
            MeetingStore.setMeetings(response.data);
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

export async function AddMeetingToserver({data,setIsValid}) {
    try {
        const response = await axios.post("http://localhost:8787/appointment", data);
        if (response.status === 200) {
            MeetingStore.addMeeting(data);
setIsValid(true);
        }
    }
    catch (e) {
        if (e.response.status===400) {
            setIsValid(false);
            alert('The date and time are allocated!');
        }
        else {
            setIsValid(false);
            alert('server failed');
        }
    }

}
