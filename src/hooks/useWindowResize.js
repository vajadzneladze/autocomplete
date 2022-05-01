import React, { useEffect, useState } from 'react';

/** Constants */
import { MOBILE_POINT } from '../constants';

export const useWindowResize = () => {

    const [ width, setWidth ] = useState(window.innerWidth);  // window width
    const [ device, setDevice ] = useState(() => {
        return MOBILE_POINT <= window.innerWidth ? 'Desktop' : 'Mobile'
    }); // device name

    /** update window width/device name after window resize */
    const changeHandler = () => {
        setDevice(() => {
            return MOBILE_POINT <=  window.innerWidth ? 'Desktop' : 'Mobile';
        })
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        
        window.addEventListener('resize', changeHandler);

        return () => {
            window.removeEventListener('resize', changeHandler);
        }
    }, [])

    return {
        width,
        device
    }
}

