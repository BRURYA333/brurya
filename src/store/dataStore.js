import { makeObservable, observable, action } from 'mobx';
import Swal from 'sweetalert';


class DataStore {
    services = [{
        id: '0',
        price: "250",
        name: "עוגות יום הולדת",
        describtion:" עוגות לילדים ועוגות לילדות, עוגות מספרים ועוגות של אותיות",
        // image:
      },
      {
        id: '1',
        price: "300",
        name: " עוגות חתונה וימי נישואין",
        describtion: "עוגות קומות עם קרם וקצפת עוגת טבעת ",
        // image:
      },
      {
        id: '2',
        price: "300",
        name: " בר מתוקים",
        describtion: "אין אין אין חגיגה, בלי בלי בלי עוגת יום הולדת",
        // image:
      }
    ];

    meetingList = [];

    constructor() {
        makeObservable(this, {
            services: observable,
            meetingList: observable,
            setService: action,
            addService: action,
            // setMeeting: action,
            // addMeeting: action,
         //   isLogin: observable,
            setIsLogin: action
        }
        )
        if (this.services.length === 3)
        this.services.map(s => this.addService(s))
      console.log("the new length is: ", this.businessServices.length)
  
    }

    setIsLogin = (status) => {
        this.isLogin = status;
    }
    setService = (businessDetails) => {

    }
    addService = async (newServiceDetails) => {
      try {
        if (this.services.length > 3) {
          newServiceDetails.id = String(this.businessServices.length);
        //   newServiceDetails.image = Image11;

        }
    
        const response = await fetch("http://localhost:8787/service", {
          method: "POST",
          body: JSON.stringify(newServiceDetails),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200) {
          this.businessServices = [...this.businessServices, newServiceDetails];
          console.log("true");
          console.log(this.businessServices.length);
    
          if (this.businessServices.length > 6) {
            Swal.fire({
              title: "A new service has been added",
              text: "Your details have been successfully received",
              icon: "success",
            });
          }
    
          return;
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Unable to schedule the meeting",
          icon: "error",
        });
      }
    };
    
    initialbusinessServices = async () => {
  
      const response = await fetch("http://localhost:8787/services");
      const data = await response.json();
      console.log(data);
      this.businessServices = ([...data]);
      console.log("businessServices", this.businessServices)
    }
    setBusinessDetails = async (details) => {
      const response = await fetch("http://localhost:8787/businessData", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response.statusText);
  
      if (response.status === 200) {
        this.businessDetails = details;
        console.log("true");
        console.log("true", details.name);
  
        Swal.fire({
          title: "The details have been saved",
          text: "Your details have been successfully entered",
          icon: "success",
        });
      }
    };
  
    initBusinessDetails = async (details) => {
      const response = await fetch("http://localhost:8787/businessData", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response.statusText);
  
      if (response.status === 200) {
        this.businessDetails = details;
        console.log("true");
        console.log("true", details.name);
      }
    };
    initialBusinessDetails = async () => {
      const response = await fetch("http://localhost:8787/businessData");
      const data = await response.json();
      console.log(data);
      this.businessDetails = data;
      console.log("businessDetails", this.businessDetails);
    };
    
  
  }
export default new DataStore();