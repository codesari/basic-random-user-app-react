import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import "./Home.css";

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
    <div
      id="wrapper"
      className="d-flex flex-column gap-3 justify-content-center align-items-center rounded-circle "
    >
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
          <Card bg="dark" text="light" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={large} />
            <Card.Body>
              <Card.Title>{`${first} ${last}`}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <BsFillPersonFill className="me-2" /> {age}
              </ListGroup.Item>
              <ListGroup.Item>
                <BsTelephoneFill className="me-2" />
                {cell}
              </ListGroup.Item>
              <ListGroup.Item>
                <MdEmail className="me-2" />
                {email}
              </ListGroup.Item>
              <ListGroup.Item>
                <BiWorld className="me-2" /> {country}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
      <button onClick={() => getData()} className="btn btn-dark">
        Get DATA{" "}
      </button>
    </div>
  );
};

export default Home;
