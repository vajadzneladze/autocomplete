/**  JSON Data  */
import data from '../names.json';

/** Constants */
import {  TIME_OUT } from '../constants';

/** Get a list of names filtered by keyword */
export const fetchData = ( keyword  = '' ) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            /** populate an array of options with the selected names */
            if(keyword !== ''){

                let options = [];

                data.forEach( name => {
                    if(name.toUpperCase().indexOf(keyword.toUpperCase()) === 0){
                        options.push(name);
                    }
                })

                resolve(options);
            } else {
                reject('empty keyword');
            }
            
        }, TIME_OUT);
    })
}