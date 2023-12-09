import CanvasJSReact from '@canvasjs/react-charts';
import React, { useState } from 'react';
import { FetchMachineByCountno, FetchMachineCountByYes} from "../services/MachineService";
import { Button } from 'react-bootstrap';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Dashboard() {
  const [genervisuals, setGenderVisuals] = useState({
    title: {
      text: "Working Machines"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Yes", y: 0 },
          { label: "No", y: 0 }
        ]
      }
    ]
  });

  const handleChange = async () => {
    try {
      const yesCount = await FetchMachineCountByYes("yes");
      const noCount = await FetchMachineByCountno("no");

      setGenderVisuals((prevVisuals) => ({
        
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "Yes", y: yesCount.count },
              { label: "No", y: noCount.count }
            ]
          }
        ]
      }));

      console.log(yesCount, noCount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CanvasJSChart options={genervisuals} />
      <Button type="submit" onClick={handleChange}>Submit</Button>
    </div>
  );
}
