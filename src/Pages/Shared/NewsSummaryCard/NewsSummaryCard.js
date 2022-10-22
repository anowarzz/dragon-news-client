import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { author, title, _id, total_view, details, image_url } = news;

  
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center" >
        <div className="d-flex">
          <Image className="me-3"
            roundedCircle
            src={author.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
         <FaRegBookmark />   
         <FaShareAlt />
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Img variant="top" src={image_url} />

        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSummaryCard;
