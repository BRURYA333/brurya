import { makeObservable, observable, action } from 'mobx';


class ServiceStore {

  //data  

  services = [];

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
    const updatedService = {
        // ...data,
        name:data.name,
        description:data.description,
        image: data.image // הוספת התמונה של השירות לנתונים החדשים
    };
    this.services = [...this.services, updatedService];
}

  updateServices(data) {
    
    this.services=data;

  }
}
export default new ServiceStore();