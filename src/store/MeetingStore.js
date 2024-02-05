class MeetingStore {
    
    meetingList = [];
    title="Want to order a special cake to your home?";
    description="I will do it for you!";
    owner="BRURYA TENENBAUM";
    address="SHIVTEY ISRAEL 14 BNEI-BRAK";
    phone="052-7695514";

    constructor() {
        makeObservable(this, {
            title:observable,
            description:observable,
            owner:observable,
            address:observable,
            phone:observable
        }
    )
}
}
export default new MeetingStore();