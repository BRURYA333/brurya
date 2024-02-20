import { makeObservable, observable, action } from 'mobx';


class ServiceStore {
  //data  

  services = [{
    id: '0',
    price: "250",
    name: "עוגות יום הולדת",
    describtion: " עוגות לילדים ועוגות לילדות, עוגות מספרים ועוגות של אותיות",
    image: "/images/14.png",
  },
  {
    id: '1',
    price: "300",
    name: " עוגות חתונה וימי נישואין",
    describtion: "עוגות קומות עם קרם וקצפת עוגת טבעת ",
    image: "/images/12.png",
  },
  {
    id: '2',
    price: "300",
    name: " בר מתוקים",
    describtion: "אין אין אין חגיגה, בלי בלי בלי עוגת יום הולדת",
    image: "/images/16.png",  }];


  //export type data
  constructor() {
    makeObservable(this, {
      services: observable,
      updateService: action,
      updateServices: action
    })
  }

  //action for update data
  updateService(data) {
    this.services = [...this.services, data]
  }

  updateServices(data) {
    if (data.length) {
      this.services = data
    } 
    else {
      this.services = [{
        id: '0',
        price: "250",
        name: "עוגות יום הולדת",
        describtion: " עוגות לילדים ועוגות לילדות, עוגות מספרים ועוגות של אותיות",
        img: "../../src/assets/images/14.png",
      },
      {
        id: '1',
        price: "300",
        name: " עוגות חתונה וימי נישואין",
        describtion: "עוגות קומות עם קרם וקצפת עוגת טבעת ",
        img: "../../src/assets/images/12.png",
      },
      {
        id: '2',
        price: "300",
        name: " בר מתוקים",
        describtion: "אין אין אין חגיגה, בלי בלי בלי עוגת יום הולדת",
        img: "../../src/assets/images/11.png",
      }
      ]
    }
  }
}
export default new ServiceStore();