'useClient';
import React, {useState, useEffect} from 'react';
import SimpleCard from '../components/Cards/SimpleCard';

type WeekInfo = {
    dates: {
        fromdate_iso: string;
        todate_iso: string;
        fromdate: string;
        todate: string;
    };
    weekNo: number;
}

const Week = function() {
    const [weekInfo, setWeekInfo] = useState<WeekInfo | undefined>();

    useEffect(() => {
        fetch("./api/week")
        .then(response => response.json())
        .then(data => {
                setWeekInfo(data);
                console.log(data);
            
            })
    }, [])
    if (weekInfo === undefined) {
        return <h1>Loading...</h1>
    }
    return (
        <SimpleCard title={`Uke ${weekInfo.weekNo}`} text={`Fra ${weekInfo.dates.fromdate} til ${weekInfo.dates.todate}`}/>
    )
}

export default Week;