import { Button, Typography } from "@mui/material";
import { observer } from "mobx-react"
import AdminStore from "../../store/AdminStore";
import './BusinessDetailsShow.css'

const BusinessDetailsShow = (observer(() => {

  return (<>
        
          <div class="details">
            <Typography variant="h6"> {AdminStore.data.title}</Typography>
            <Typography variant="h6">{AdminStore.data.description}</Typography>
            <Typography variant="h6"> {AdminStore.data.owner}</Typography>
            <Typography variant="h6"> {AdminStore.data.address}</Typography>
            <Typography variant="h6">{AdminStore.data.phone}</Typography>
   
          </div>
        
    </>
  );
}));


export default BusinessDetailsShow