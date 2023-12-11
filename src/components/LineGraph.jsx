import CanvasJSReact from '@canvasjs/react-charts';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchMachines } from '../services/MachineService';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function LineGraph(){

async function populateMachineState() {
    try {
        const data = await fetchMachines();
        const newDataPoints = data.Details.map(item => ({
            x: (moment(item.machdate, 'YYYY-MM-DD').toDate()),
            y: item.machno
        }));
    
        setGenderVisuals(prevVisuals => ({
            ...prevVisuals,
            data: [{
                type: "splineArea",
                yValueFormatString: "#,## M-ID",
                dataPoints: newDataPoints
            }]
        }));
    } catch (error) {
        console.log(error);
    }
}

const [genervisuals, setGenderVisuals] = useState({
    title: {
        text: "Machine Maintenance"
    },
    axisY: {
        title: "Machine ID",
        suffix: " -ID"
    },
    data: [{
        type: "splineArea",
        yValueFormatString: " M-ID",
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


		