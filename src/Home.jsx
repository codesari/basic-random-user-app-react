import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const Home = () => {
  const [dataFetched, setDataFetched] = useState([]);
  const getData = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const { data } = await axios(url);
      setDataFetched(data.results);
      console.log(data.results);
      console.log(dataFetched);
    } catch (error) {
      console.log("Data not fetched !");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {dataFetched?.map((item) => {
        const {
          picture: { large },
          name: { first, last },
          email,
          cell,
          location: { country },
          dob: { age },
        } = item;
        console.log(email);
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={large} />
            <Card.Body>
              <Card.Title>{`${first} ${last}`}</Card.Title>
              <Card.Text>{age}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{cell}</ListGroup.Item>
              <ListGroup.Item>{email}</ListGroup.Item>
              <ListGroup.Item>{country}</ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
