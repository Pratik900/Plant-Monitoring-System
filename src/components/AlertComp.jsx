import { useState } from 'react';
import { Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export function AlertComp(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.text}</Alert.Heading>
      </Alert>
    );
  }
  return <Button variant='danger' onClick={() => setShow(true)}>Show Alert</Button>;
}