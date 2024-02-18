
import { makeObservable, observable, action } from 'mobx';

class AdminStore {
    data = {
        title: "Want to order a special cake to your home?",
        description: "I will do it for you!",
        owner: "BRURYA TENENBAUM",
        address: "SHIVTEY ISRAEL 14 BNEI-BRAK",
        phone: "052-7695514",
    }
    isLogin = true

    constructor() {
        makeObservable(this, {
            data: observable,
            UpdateBusinessDetails: action
            
        }
        )
    }

    UpdateBusinessDetails(data) {
        this.data = data
    }
}
export default new AdminStore();

