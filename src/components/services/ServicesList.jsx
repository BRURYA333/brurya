import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import dataStore from '../../store/serviceStore';
import ServiceCard from './ServicesCard';
import { GetServices } from '../../store/serviceServer';


const ServiceList = observer(() => {
    console.log(dataStore.services);
    // const [isAdd, setAdd] = useState(false);
    useEffect(() => {
        if (!dataStore.services.length) {
            GetServices();
        }
    }, [])
    return (
        <>
            {dataStore.services.map((service, index) => {
                return <div key={index}> <ServiceCard service={service} /> </div>
            }
            )}
            {/* <button> add cake</button> */}
        </>
    )
})

export default ServiceList


