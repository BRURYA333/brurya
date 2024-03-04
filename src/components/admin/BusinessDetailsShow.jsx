import { Typography } from "@mui/material";
import { observer } from "mobx-react"
import AdminStore from "../../store/AdminStore";
import './BusinessDetailsShow.css'

const BusinessDetailsShow = observer(() => {

  return (
    <div className="details">
      <Typography variant="h6" className="custom-text"> {AdminStore.data.title}</Typography>
      <Typography variant="h6" className="custom-text">{AdminStore.data.description}</Typography>
      <br/>
      <Typography variant="h6" className="custom-text"> {AdminStore.data.owner}</Typography>
      <Typography variant="h6" className="custom-text"> {AdminStore.data.address}</Typography>
      <Typography variant="h6" className="custom-text">{AdminStore.data.phone}</Typography>
    </div>
  );
});

export default BusinessDetailsShow;
