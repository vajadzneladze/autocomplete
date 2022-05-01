import React, { memo, useState } from 'react';

/** Api services */
import { fetchData } from '../api';

/** Components */
import List from './List';

const Input = () => {

    const [ value, setValue ] = useState(''); // keyword from input
    const [ list, setList ] = useState(); // list of selected options

    const setInputVal = val => {
        setValue(val);
        setList(null);
    }

    const changeHandler = async (e) => {

        setValue(e.target.value);

        try {
            
            let list = await fetchData(e.target.value);
            setList(list)

        } catch(err){

            console.log(err);
            setList(null);
        }
    }

    return (
        <div className = "autocomplete">

            <input className = "keyword"  onChange = { e => changeHandler(e) } value = { value } />

            <div className = "list">
                {
                    list  && <List data = { list } selectHandler = { setInputVal }/>
                }
            </div>
            
        </div>
    )
}

export default memo(Input);