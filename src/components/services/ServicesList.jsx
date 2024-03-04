import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import dataStore from '../../store/serviceStore';
import ServiceCard from './ServicesCard';
import { GetServices } from '../../store/serviceServer';
import MyBackground from '../MyBackground';


const ServiceList = observer(() => {
    console.log(dataStore.services);
 
    useEffect(() => {

        GetServices();

    }, [])
    
    return (
        <>
              <header>
        <MyBackground />
      </header>
            <div className='card1'>
                {dataStore.services.map((service, index) => {
                    return <div key={index}>
                        <ServiceCard service={service} /> </div>
                }
                )}
            </div>
        </>
    )
})

export default ServiceList


