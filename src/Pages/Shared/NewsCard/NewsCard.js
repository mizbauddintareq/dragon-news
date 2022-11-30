import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url } = news;
  return (
    <div className="my-4">
      <Card className="">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <article>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>{" "}
              </article>
            ) : (
              <article>{details}</article>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
