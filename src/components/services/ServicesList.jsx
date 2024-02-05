import { observer } from 'mobx-react';
import dataStore from '../../store/dataStore.js';

const ServiceList = (observer(() => {

    console.log(dataStore.services);
    return (
        <>
            {dataStore.services.map((service, index) => {
                return <div key={index}>{service.name}</div>
            })}
            {/* <Link to={'../AddMeeting'}>add meeting</Link> */}
        <outlet/>
        </>
    )
}))

export default ServiceList


