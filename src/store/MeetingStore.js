import { makeObservable, observable, action } from 'mobx';

class MeetingStore {

    meetingList = [];

    constructor() {
        makeObservable(this, {
            meetingList: observable,
            setMeetings: action,
            addMeeting: action
        })
    }

    setMeetings(data) {
        this.meetingList = data;
    }

    addMeeting(data) {
        this.meetingList = [...this.meetingList, data]
    }
}
export default new MeetingStore();