import React from "react";
import { Form } from "react-bootstrap";

function Feedbacks({yes,no}) {
    <div>
    <Form.Control.Feedback>{yes}</Form.Control.Feedback>
    <Form.Control.Feedback type="invalid">{no}</Form.Control.Feedback>
  </div>
}

export default Feedbacks;
