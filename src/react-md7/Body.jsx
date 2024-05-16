import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Body() {
  return (
    <div>
      <div className="main-div">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://assets-global.website-files.com/5a2271474d2f41000163a774/6021b092e93cc48c0c3848e0_react-intro.png"
          />
          <Card.Body>
            <Card.Title>Example Card</Card.Title>
            <Card.Text>This is an example React card</Card.Text>
            <Button variant="primary">Example Button</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://assets-global.website-files.com/5a2271474d2f41000163a774/6021b092e93cc48c0c3848e0_react-intro.png"
          />
          <Card.Body>
            <Card.Title>Example Card</Card.Title>
            <Card.Text>This is an example React card</Card.Text>
            <Button variant="primary">Example Button</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://assets-global.website-files.com/5a2271474d2f41000163a774/6021b092e93cc48c0c3848e0_react-intro.png"
          />
          <Card.Body>
            <Card.Title>Example Card</Card.Title>
            <Card.Text>This is an example React card</Card.Text>
            <Button variant="primary">Example Button</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
