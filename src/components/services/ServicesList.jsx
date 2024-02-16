import { observer } from 'mobx-react';
import { useEffect } from 'react';
import dataStore from '../../store/serviceStore';
import ServiceCard from './ServicesCard';
import { GetServices } from '../../store/serviceServer';


const ServiceList = observer(() => {
    console.log(dataStore.services);

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
        </>
    )
})

export default ServiceList


