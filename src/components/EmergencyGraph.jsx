import CanvasJSReact from '@canvasjs/react-charts';
import React, { useEffect, useState } from 'react';
import { FetchMachineByYes, FetchMachineByno } from "../services/MachineService";
import { Container } from 'react-bootstrap';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function EmergencyGraph() {
    const [genervisuals, setGenderVisuals] = useState({
        animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			subtitles: [{
				text: "Emergency Repair",
				verticalAlign: "center",
				fontSize: 20,
				dockInsidePlotArea: true
			}],
			data: [{
			}]
    });
    const handleChange = async () => {
        try {
          const yesCount = await FetchMachineByYes("yes");
          const noCount = await FetchMachineByno("no");
    
          setGenderVisuals((prevVisuals) => ({
            ...prevVisuals,
            data: [{
                animationEnabled: true,
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Emergency Repair", y: yesCount.count },
					{ name: "Working", y: noCount.count },
				]
			}]
          }));
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        handleChange();
    }, []);
    return (
		<div>
            <Container>
			    <CanvasJSChart options = {genervisuals}/>
            </Container>
		</div>
		);
}
