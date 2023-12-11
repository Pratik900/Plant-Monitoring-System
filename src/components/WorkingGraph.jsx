import CanvasJSReact from '@canvasjs/react-charts';
import React, { useEffect, useState } from 'react';
import { FetchMachineByCountno, FetchMachineCountByYes} from "../services/MachineService";
import { Container } from 'react-bootstrap';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function WorkingGraph() {
  const [genervisuals, setGenderVisuals] = useState({
    title: {
      text: "Working Machines"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Yes", y: 1 },
          { label: "No", y: 1 }
        ]
      }
    ]
  });

  const handleChange = async () => {
    try {
      const yesCount = await FetchMachineCountByYes("yes");
      const noCount = await FetchMachineByCountno("no");

      setGenderVisuals((prevVisuals) => ({
        ...prevVisuals,
        title: {
          text: "Working Machines"
        },
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
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div>
      <Container>
          <CanvasJSChart options={genervisuals} />
      </Container>
    </div>
  );
}
