import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [items, setItems] = React.useState([]);
  const changed = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://gavs.url.co.uk/api/search?=${searchTerm}`
      );
      setItems(result.data);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="Home">
      <Container fluid>
        <Row className="justify-content-md-left">
          <Col md="auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Search AH"
                  onChange={changed}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <>
          {items.map((item: any) => {
            return (
              <Row>
                <Col>{item.id}</Col>
                <Col>{item.name}</Col>
              </Row>
            );
          })}
        </>
      </Container>
    </div>
  );
};

export default Home;
