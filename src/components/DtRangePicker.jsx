import React from 'react'
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DtRangePicker = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const handleChange = (ranges) => {
        setDate(ranges.selection)
        
   
    }
    const handleClick = () => {
        setOpenDate((prev) => !prev)
        console.log(date);
    }


    return (
        <div >
            <h2 onClick={handleClick}>{`${format(date.startDate,'MMM,yyy')} - ${format(date.endDate,'MMM,yyy')}`}</h2>
            {openDate && <DateRangePicker 
                ranges={[date]}
                onChange={handleChange}

                
            />}

        </div>
    )
}
export default DtRangePicker