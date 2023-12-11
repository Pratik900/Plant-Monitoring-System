import CanvasJSReact from '@canvasjs/react-charts';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchMachines } from '../services/MachineService';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function LineGraph(){
    const [, setMachine] = useState([]);

async function populateMachineState() {
    try {
        const data = await fetchMachines();
        setMachine(data.Details);
    
        const newDataPoints = data.Details.map(item => ({
            x: (moment(item.machdate, 'YYYY-MM-DD').toDate()),
            y: item.machno
        }));
    
        console.log(newDataPoints);
    
        setGenderVisuals(prevVisuals => ({
            ...prevVisuals,
            data: [{
                type: "splineArea",
                xValueFormatString: "YYYY",
                yValueFormatString: "#,## M-ID",
                dataPoints: newDataPoints
            }]
        }));
    } catch (error) {
        console.log(error);
    }
}

const [genervisuals, setGenderVisuals] = useState({
    animationEnabled: true,
    title: {
        text: "Machine Maintenance"
    },
    axisY: {
        title: "Machine ID",
        suffix: " -ID"
    },
    data: [{
        type: "splineArea",
        xValueFormatString: "YYYY",  // This is fine since x is a date object
        yValueFormatString: "#,## M-ID",
        dataPoints: []
    }]
});

useEffect(() => {
    populateMachineState();
}, []);

return (
    <div>
        <CanvasJSChart options={genervisuals} />
    </div>
);
}


		