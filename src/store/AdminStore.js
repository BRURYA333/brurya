import { makeObservable, observable, action } from 'mobx';

class AdminStore {
    data = {
        title: "?מעוניין להזמין עוגה מיוחדת עד לפתח הבית",
        description: "...אני אעשה זאת בשבילך! פשוט, להיות בקשר",
        owner: "ברוריה טננבוים",
        address: "שבטי ישראל 14 בני ברק",
        phone: "052-7695514",
    };
    isLogin = false;

    constructor() {
        makeObservable(this, {
            setIsLogin: action,
            isLogin: observable,
            data: observable,
            UpdateBusinessDetails: action

        }
        )
    }

    UpdateBusinessDetails(data) {
        if (data) {
            this.data = data
        }
        else {
            this.data = {
                title: "?מעוניין להזמין עוגה מיוחדת עד לפתח הבית",
                description: "...אני אעשה זאת בשבילך! פשוט, להיות בקשר",
                owner: "ברוריה טננבוים",
                address: "שבטי ישראל 14 בני ברק",
                phone: "052-7695514",
            }
        }
    }

    setIsLogin(isLogin) {

        this.isLogin = isLogin;
    }
}
export default new AdminStore();

